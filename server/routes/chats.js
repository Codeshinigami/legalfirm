const {updateChat , getChats} = require("../controllers/chats")
const router = require("express").Router();

router.post("/updateChat" , updateChat);
router.post("/getChats" , getChats);

module.exports = router