const express = require("express")
const multer = require("multer")

const App = express()


// multer obj
const upload = multer();

App.use(express.json())

App.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next();
})


App.post('/calculator', upload.none(), (req, res)=>{
  let {n1, n2} = req.body;
  res.json(Number(n1) + Number(n2));
})

App.listen(3000,()=>{
  console.log('server is running on port: ', 3000);
})