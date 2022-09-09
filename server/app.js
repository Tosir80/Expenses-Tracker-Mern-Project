
const express = require('express')
require('dotenv').config({path:"./config/.env"})
const app = express()
const cors =require('cors')
const router = require('./routes/route')
const con = require('./DB/connect')
require('./DB/connect')

const port=process.env.PORT || 5000


//MidlleWare
app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1',router)


con.then(db => {
  if(!db) return process.exit(1);

  // listen to the http server 
  app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`)
  })

  app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
  // error in mondb connection
}).catch(error => {
  console.log(`Connection Failed...! ${error}`);
});