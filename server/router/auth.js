const express= require('express');
const router=express.Router();

require('../db/conn');
const Message = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send("Hello router here")
});

router.post('/send', async(req, res)=>{

    const {name, email, message} = req.body;
    // const data = await req.body;
    // if(!data){
    //     console.log("unable to fetch data");
    //     res.json({message : "unable data"});
    // }
    // console.log(name);
    // res.json({message : "msg sent"});

    if (!name || !email || !message){
        res.status(422).json({error : "incomplete fields"});
    }

    try{
        const mess = new Message({name, email, message});

        const sendMessage = await mess.save();
        if(sendMessage){
            console.log(req.body);
            res.status(201).json({messsage : "Message sent successfully"});
        }
        else{
            res.status(422).json({error : "Message not sent !"});
        }
    }catch(err){
        console.log(error);
    }
});


module.exports = router;