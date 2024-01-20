const router = require("express").Router();
const { paymentverification , checkout , getKey } =  require("../controllers/payments");

router.get("/getKey" , getKey);
router.post("/checkout" , checkout);
router.post("/paymentverification" , paymentverification);

module.exports = router