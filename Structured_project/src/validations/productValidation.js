const joi = require("joi");

const createProductSchema = joi.object({
    name: joi.string().trim().min(3).max(100).required(),
    price: joi.number().min(0).required(),
    sku : joi.string().trim().uppercase().min(3).max(20).required(),
    description: joi.string().trim().min(10).max(500).required(),
});

const updateProductSchema = joi.object({
    name: joi.string().trim().min(3).max(100).optional(),
    price: joi.number().min(0).optional(),
    sku : joi.string().trim().uppercase().min(3).max(20).optional(),
    description: joi.string().trim().min(10).max(500).optional(),
});

module.exports = {createProductSchema , updateProductSchema};
