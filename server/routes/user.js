const { Router } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




const router = Router()

// POST /api/users/register
router.post('/register', async (req, res) => {
    const { email, password, username } = req.body
    let hash

    try {
        hash = await bcrypt.hash(password, 10)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server Error. Password hash failed' })
    }


    const user = new User({
        email: email, password: hash, username
    })

    user.save().then(() => {
        res.status(201).json({
            message: 'User created success',
            user: {
                userId: user._id,
                email: user.email,
                username: user.username
            }
        })
    }).catch((err) => {
        res.status(500).json({ message: 'Error creating user' })
    })

})


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        user = await User.findOne({ email: email, })
        if (!user) {
            return res.status(404).json({ message: 'AUTHENTICATION FAILED' })
        }
        const hash = await bcrypt.compare(password, user.password)
        if (!hash) {
            throw new Error('AUTHENTICATION FAILED T')
        }

        const token = await jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' })

        res.json({
            token: token,
            username: user.username,
            userId: user._id,
            email: user.email,
            expiresIn: 7200 //2 hours (2*3600)
        })

    } catch (error) {
        if (error) {
            console.log(error)
            res.status(500).json({ message: 'Authentication Failed' })
        }

    }
})


module.exports = router