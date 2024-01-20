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
    picture:{
        type : String
    },
    chats : [
        {
            user : String,
            ai : String
        }
    ],
    Orders : [
        {
            method : String,
            amount : Number,
            orderid : String,
            time : String
        }
    ]
})

const userModel = mongoose.model("LegalFirm" , userSchema , "Users");

module.exports = userModel;