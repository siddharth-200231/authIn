const { signup } = require("../controllers/authController");
const { signupvalidation, loginvalidation } = require("../middlewares/authValidate");

const router=require("express").Router()
router.post('/login',loginvalidation)
router.post('/signup',signupvalidation,signup)
module.exports=router;
