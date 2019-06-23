
const multer = require('multer')
const path = require('path')

const MIMETYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIMETYPE_MAP[file.mimetype]
        let error = new Error('invalid mime type')

        if (isValid) {
            error = null
        }
        //callback takes arguments error,path-String
        cb(error, path.join(__dirname, '..', 'public/images'))
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-')
        const extention = MIMETYPE_MAP[file.mimetype]

        //returning transformed filename
        cb(null, name + '-' + Date.now() + '.' + extention)
    }
})

module.exports = multer({ storage: storage }).single('image')