const router = require("express").Router();
const {registerLawyer , getLawyers} = require("../controllers/lawyer");

router.get("/getLawyers" , getLawyers);
router.post("/registerLawyer" , registerLawyer);

module.exports = router