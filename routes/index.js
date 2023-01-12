
const router = require("express").Router();
const fileUpload = require("../routes/file-upload");
const fs = require("fs")
router.get("/", (req,res)=>{
  res.render("index",{
    url : "http://localhost:3000/madhavPic..jpg"
  });
})

router.get("/api",(req,res)=>{
  res.status(201).json({mes:"api testing successfull"})
} )



router.get("/signup", (req,res)=>{
  res.render("signup",{
    url : "http://localhost:3000/madhavPic..jpg"
  })
})


router.get("/edit-profile", (req,res)=>{
  res.render("editProfile",{
    url : "http://localhost:3000/madhavPic..jpg"
  })
})



router.post("/upload", fileUpload.single("userProfile"), (req,res)=>{
  console.log(req.file);
  if(!req.file){
    return res.redirect("/edit-profile")
  }
  res.render("upload",{
    url:req.file.filename 
  });
})


// delete image route

router.post("/deletePic",(req,res)=>{
  fs.unlink("uploads/madhavPic..jpg",(err)=>{
    if(err){
      console.log(err)
    }
    console.log("pic delete ")
  })
  
  res.redirect("/")
    })
  


router.get("/upload", (req,res)=>{
  res.render("upload",{
    url : "http://localhost:3000/madhavPic..jpg"
  })
})


module.exports =router;