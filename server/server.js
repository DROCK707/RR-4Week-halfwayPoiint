// endpoints must go in this file

const express = require("express")  //import express pkg
const cors = require("cors")        //import cors pkg
const {getAllAttendees} = require('./controller') // import these functions from controller.js file

const app = express()      // take express function and assign to variable, app, so it keeps the code neat and organized.

app.use(express.json())   //translate json to javascript
app.use(cors())     


// set up endpoints

app.get('/api/attendees', getAllAttendees)










app.listen(4040, () => console.log("Crank it up to port 4040"))