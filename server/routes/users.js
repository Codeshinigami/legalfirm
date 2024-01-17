const { createUser } = require("../controllers/users");
const router = require("express").Router();


router.post("/register" , createUser);

module.exports = router;