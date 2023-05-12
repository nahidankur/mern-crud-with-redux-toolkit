const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db.js')
const userRoute = require('./routes/userRoute.js')
const movieRoute = require('./routes/movieRoute.js')
const { errorHandler} = require('./middleware/errorMiddleware.js')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use(errorHandler)



__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    });
  }
  
  

app.listen(port, ()=> {
    console.log(`server is runnng under port ${port}`)
})