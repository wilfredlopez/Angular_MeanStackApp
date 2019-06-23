const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const fileWithMulter = require('./midlewares/fileWithMulter')
const verifyAuth = require('./midlewares/auth')
const { getPosts, addPosts, deletePost, updatePost, getOnePost } = require('./routes/posts')

//Static client folder
app.use(express.static(path.join(__dirname, '..', 'dist/client')))
//static images path
app.use(express.static(path.join(__dirname, 'public')))

//cors and json data
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
    //i can restric origins removing the * and instead adding the origin address. eg. http://localhost:4200
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    }
    next();
})


//ROUTES

//Posts Routes
app.get('/api/posts', getPosts)
app.get('/api/posts/:id', getOnePost)
app.post('/api/posts', verifyAuth, fileWithMulter, addPosts)
app.delete('/api/posts/:id', verifyAuth, deletePost)
app.patch('/api/posts/:id', verifyAuth, fileWithMulter, updatePost)

//User Routes
const userRoutes = require('./routes/user')
app.use('/api/users', userRoutes)

//END ROUTES


//serve client routes. fist the build command needs to be run on the client folder
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'client', 'index.html'))
})

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ef6nu.mongodb.net/${process.env.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('connected to database')
}).catch(() => {
    console.warn('connection to database failed')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})