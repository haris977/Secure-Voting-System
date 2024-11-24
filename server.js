const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); 
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send('This is a home page of Voting Application....')
})

//import jwtAuthMiddleware
const {jwtAuthMiddleware} = require('./jwt')

// importing and using user route
const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)
//importing candidates routes and using
const candidateRoutes = require('./routes/candidateRoutes')
app.use('/candidate', jwtAuthMiddleware, candidateRoutes)

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

