const multer = require('multer');
const path = require('path');


const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        const profile = path.join(__dirname, '../public/profiles');
        callback(null, profile)
    },
    filename: function (req, file, callback) {
        const nameProfile = Date.now() + path.extname(file.originalname)
        callback(null, nameProfile)
    }
})

module.exports = multerDiskStorage;
