const userModel = require("../models/users");

const updateChat = async (req, res) => {

    try{
        const { email, thread } = req.body;

        userModel
          .updateOne({ email: email }, { $push: { chats: thread } })
          .then((result) => {
                if(result.nModified > 0){
                    res.json({ success: "chat updated successfully" })
                }else{
                    res.json({ error: "no user found with specified email" });
                }
            })
          .catch((err) => {
            console.log(err);
            res.json({ error: "error occured while updating chat" });
          });
    }catch(err){
        res.json({error : "Internal server error."})
    }

};

const getChats = async(req,res) =>{
    try{
        const {email} = req.body

        const {chats} = await userModel.findOne({email : email});
        res.json({chats : chats})

    }catch(err){
        console.log(err)
        res.json({error : "Internal Server Error."});
    }
}


module.exports = {updateChat , getChats};