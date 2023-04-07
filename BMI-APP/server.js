const express = require('express')
const multer = require('multer')


const app = express()

const upload = multer()


app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next();
})


app.post('/calculateBMI', upload.none() ,(req,res)=>{
  var {weight , height } = req.body;
  weight = Number(weight)
  height = Number(height)
  var BMI = (weight / (Math.pow(height,2))).toFixed(2)

  res.status(200).json(BMI)
})

app.listen(3000,()=>{
  console.log('server is running on port: ', 3000);
})