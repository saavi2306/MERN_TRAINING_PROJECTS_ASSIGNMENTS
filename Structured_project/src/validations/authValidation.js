const joi = require("joi");

const registerSchema = joi.object({
    name: joi.string().required().trim() .min(4).max(50),
    email:joi.string().email().required().trim(),
    password:joi.string().min(6).max(20).required()
})

const loginSchema = joi.object({
    email:joi.string().email().required().trim(),
    password:joi.string().min(6).max(20).required()

})
module.exports = {registerSchema , loginSchema};