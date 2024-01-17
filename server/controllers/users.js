const userModel = require("../models/users");
const jose = require("jose");

//register route for creating new user
// !need to handle some errors

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.json({ error: "name ,email and password are required." });
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password,
    };

    //saving userdata in database
    try{
        const user = new userModel(userData);
        await user.save();
    }catch(err){
        console.error(err);
        res.json({error : "error occured while creating an user."})
    }
    
    //generate jwt token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt_token = await new jose.JWT({ name: name, email: email })
        .setExpirationTime("1d")
        .sign(secret);

    //setting cookie expiration to 1 day
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    res.cookie(jwt, jwt_token, { expires: expirationDate });
    res.status(201).json({ success: "user created successfully." });
};



module.exports = { createUser };
