const { createUser , loginUser , decodeJWT , googleLogin} = require("../controllers/users");
const router = require("express").Router();


router.post("/register" , createUser);
router.post("/login" , loginUser);
router.post("/decodeJWT", decodeJWT);
router.post("/googlelogin" , googleLogin);

module.exports = router;