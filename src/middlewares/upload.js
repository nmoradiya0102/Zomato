const multer = require("multer");
const fs = require("fs");
const path = require("path");

//banner upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "banner_image") {
            fs.mkdirSync(path.join(__dirname, "../public/Banner_Images"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/Banner_Images"));
        }
        if (file.fieldname == "restorant_image") {
            fs.mkdirSync(path.join(__dirname, "../public/Restorant_Images"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/Restorant_Images"));
        }
        if (file.fieldname == "menu_image") {
            fs.mkdirSync(path.join(__dirname, "../public/Menu_Images"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/Menu_Images"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
          cb("Only .png , .jpg and .jpeg format  are allowed.!");
        }
        cb(null, new Date().getTime() + ext);
      },
});

const upload = multer({
    storage: storage,
  });

  module.exports ={upload};