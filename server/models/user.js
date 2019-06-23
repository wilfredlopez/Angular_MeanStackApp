const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('mongoose-unique-validator')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    })

userSchema.plugin(validator)

module.exports = mongoose.model('User', userSchema)