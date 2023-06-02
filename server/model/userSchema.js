const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
});

const Message = mongoose.model('MESSAGE', userSchema);

module.exports = Message;