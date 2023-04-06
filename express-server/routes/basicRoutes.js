const express = require('express')


const router = express.Router();


router.get("/", (req,res)=>{
  res.json({msg:'home page loaded'})
})

router.get("/aboutMe",(req,res)=>{
  res.json({msg:"I am Ravindu"})
})

router.get('/hello',(req,res)=>{
  res.json({msg:"Hello world"})
})


module.exports = router;