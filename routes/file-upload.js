const multer = require("multer");
 const {v4:uuidv4} = require("uuid");
 const path = require("path");



 const fileUpload = multer({
    limits:500000,

    storage: multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,"uploads")
},
filename: (req,file,cb)=>{
    // `${uuidv4()}.${path.extname(file.originalname)}`
cb(null, "madhavPic" + "." + path.extname(file.originalname));
}
  }),


    fileFilter: (req,file,cb)=>{
const allowedFileTypes = ["jpeg","png", "jpg"]
  // mimetype = image/jpeg // image/png  // image/jpg
if(allowedFileTypes.includes(file.mimetype.split("/")[1])){
     cb(null,true)
}else{
    cb(null,false)
}
}
 })

 module.exports = fileUpload