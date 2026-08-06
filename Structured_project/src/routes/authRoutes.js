const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validationMiddleware = require("../middleware/validationMiddleware");
const {registerSchema , loginSchema} = require("../validations/authValidation");


// When a POST request comes to /register, first validate the request using userSchema, and if it is valid, execute the register controller.
router.post("/register" , 
    authMiddleware(registerSchema) ,  // ye middle ware dala hai for validation check before db calling and the authMiddleware is a function common to all and takes the schemas as arguements to specify which schema to check.
     authController.register);   //this is the controllerfunction excuted when everything in req.body is valid this runs when next() is called.

router.post("/login" , 
    authMiddleware(loginSchema) , 
    authController.login)

router.post("/logout" , authController.logout);

module.exports = router;