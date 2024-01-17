const express = require("express");
const router = express.Router();
const chatCompletion = require("../controllers/openai");

router.post("/chatCompletion", chatCompletion);

module.exports = router;