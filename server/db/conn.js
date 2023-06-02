const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect((DB),{}).then(()=>{
    console.log("connection established to db");
}).catch((err)=>console.log("connection to db unsuccessfull")
);