const mongoose=require('mongoose');
const dotenv=require("dotenv");
const express = require('express');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');

// const User = require('./model/userSchema');
const Message = require('./model/userSchema');

app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// const middleware = (req, res, next)=>{
//     console.log("Middleware granted");
//     next();
// };


app.get('/',(req,res)=>{
    res.send("Welcome to server");
})

app.listen(PORT, ()=>{
    console.log(`server up and running at ${PORT}`);
})