const updateChat = require("../controllers/chats")
const router = require("express").Router();

router.post("/updateChat" , updateChat);

module.exports = router