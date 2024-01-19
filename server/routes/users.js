const { createUser , loginUser , decodeJWT} = require("../controllers/users");
const router = require("express").Router();


router.post("/register" , createUser);
router.post("/login" , loginUser);
router.post("/decodeJWT", decodeJWT);


module.exports = router;