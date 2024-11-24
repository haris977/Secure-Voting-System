const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URL;
mongoose.connect(uri)
.then((res)=>{console.log("DB is connected successfully!")})
.catch((err)=>console.log(`Error is connecting to DB ${err}`))

const db = mongoose.connection;
module.exports = db ;