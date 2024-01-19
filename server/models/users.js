const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type: String
    },
    chats : [
        {
            user : String,
            ai : String
        }
    ]
})

const userModel = mongoose.model("LegalFirm" , userSchema , "Users");

module.exports = userModel;