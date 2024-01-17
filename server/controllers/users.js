const userModel = require("../models/users");

//register route for creating new user
// !need to handle some errors

const createUser = async(req,res) =>{
    const {name , email , password} = req.body;
    
    if(!name || !email || !password){
        res.json({error : "name ,email and password are required."})
        return;
    }

    const user = new userModel();
    await user.save();

    res.status(201).json({success : "user created successfully."});
} 

module.exports = {createUser}