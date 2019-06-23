const Post = require('../models/post')


// GET /api/post/
const getPosts = async (req, res) => {
    const { page, pageSize } = req.query
    let posts
    try {
        const count = await Post.countDocuments()
        if (page && pageSize) {
            //adding + to convert to numbers
            posts = await Post.find({}).skip(+pageSize * (+page - 1)).limit(+pageSize).populate('creator')

            return res.json({
                message: 'Post fetched success',
                posts: posts,
                maxPosts: count
            })
        } else {
            posts = await Post.find({})
            res.json({
                message: 'Post fetched success',
                posts: posts,
                maxPosts: count
            })
        }

    } catch (error) {
        return res.json({ message: 'Server Error. Unable to get posts' })
    }
}

//GET api/posts/:id
const getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (post) {
            return res.json({ message: 'Success', post: post })
        } else {
            res.status(404).json({ message: 'Post Not Found' })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error, unable to get post'
        })
    }
}

// POST /api/post/
const addPosts = (req, res) => {
    const { title, content } = req.body
    const url = req.protocol + '://' + req.get('host')

    const post = new Post({
        title, content, image: url + '/images/' + req.file.filename, creator: req.userId
    })

    post.save().then(() => {
        res.status(201).json({
            message: 'Post fetched success',
            post: post._doc
        })
    }).catch((err) => {
        res.status(500).json({ message: 'Error Adding Post' })
    })

}


// DELETE /api/post/:id
const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id, creator: req.userId })

        if (!post) {
            return res.status(401).json({ message: 'NOT AUTHORIZED' })
        }

        res.json({
            message: 'Deleted',
            post: post
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Unable to delete'
        })
    }
}

//PATCH api/posts/:id
const updatePost = async (req, res) => {
    let imagePath

    if (req.file) {
        const url = req.protocol + '://' + req.get('host')
        imagePath = url + '/images/' + req.file.filename || req.body.image
    } else {
        imagePath = req.body.image
    }


    try {
        const post = await Post.findOneAndUpdate({ _id: req.params.id, creator: req.userId }, {
            title: req.body.title,
            content: req.body.content,
            image: imagePath
        }, { new: true })

        if (!post) {
            return res.status(401).json({ message: 'NOT AUTHORIZED' })
        }

        res.json({ message: 'UPDATED', post: post })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'UNABLE TO UPDATE POST' })
    }
}





module.exports = { getPosts, addPosts, deletePost, updatePost, getOnePost }