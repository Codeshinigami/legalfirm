const mongoose = require("mongoose");

const lawyerSchema = mongoose.Schema({

    fname : String,
    lname : String,
    location : String,
    Mobile : String,
    lid : String
})

const lawyerModel = mongoose.model("EthicalEdge" , lawyerSchema , "Lawyers");;

module.exports = lawyerModel