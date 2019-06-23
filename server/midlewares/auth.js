const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const reqToken = req.headers.authorization.split(" ")[1]
        const token = await jwt.verify(reqToken, process.env.JWT_SECRET)
        req.userId = token.userId
        req.user = token
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Not Authenticated. Please send Authorization headers' })
    }


}

