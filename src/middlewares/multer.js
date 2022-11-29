const multer = require("multer");
const path = require("path");

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'anexos/'));
    },
    filename: (req, file, cb) => {
        cb(
            null, 
            `proc${req.body.processo.replace('/', '^')}seq${req.body.seq_ocorrencia}` 
            + '-' 
            + file.originalname.replace(new RegExp(' ', 'g'), '_'));
    },
});

const multerUpload = multer({ storage: fileStorage });

module.exports = multerUpload;