const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email:{
        type: String,
        unique : true,
        required : true
    },
    password:{
        type: String
    }
})

const userModel = mongoose.model("LegalFirm" , userSchema , "Users");

module.exports = userModel;