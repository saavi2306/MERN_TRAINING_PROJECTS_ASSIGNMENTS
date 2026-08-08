const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validationMiddleware = require("../middleware/validationMiddleware");
const {registerSchema , loginSchema} = require("../validations/authValidation");


// When a POST request comes to /register, first validate the request using the schema, and if valid, execute the register controller.
router.post("/register" , 
    validationMiddleware(registerSchema) ,  
     authController.register);

router.post("/login" , 
    validationMiddleware(loginSchema) , 
    authController.login)

router.post("/logout" , authController.logout);

module.exports = router;