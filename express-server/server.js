const express = require("express")
// import router 
const basicRoutes = require("./routes/basicRoutes")

const App = express()

App.use(express.json())

// routes
App.use('/api', basicRoutes)


App.listen(4000, ()=>{
  console.log('server is running on port: ', 4000);
})