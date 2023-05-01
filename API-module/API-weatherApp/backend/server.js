require("dotenv").config()
const express  = require("express")
const multer = require("multer")


const app = express()

app.use(express.json())

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  )
  next()
})

const upload = multer()



//post request
app.post("/requestData", upload.none() , async(req,res)=>{
  try {
    const {city} = req.body
    // fetch data from weather API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
    const json = await response.json()
    res.status(200).json(json)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
})

app.listen(4000, ()=>{
  console.log("Server is running on Port 4000");
})