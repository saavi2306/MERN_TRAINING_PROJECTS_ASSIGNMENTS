const express = require("express");
const router = express.Router();

const validationMiddleware = require("../middleware/validationMiddleware");
const { createProductSchema, updateProductSchema } = require("../validations/productValidation");
const productController = require("../controllers/productController");
const authenticate = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// create the product
router.post(
    "/create",
    authenticate,
    authorization("admin", "seller"),
    validationMiddleware(createProductSchema),
    productController.createProduct
);

// get all products:
router.get("/getAll" , authenticate,
    productController.getAllProducts // no Authorization required because we are only fetching the data;
);

// get product by id:
 router.get("/getId/:id" , authenticate, 
    productController.getProductById
 );

//  update product:
router.post(
    "/update/:id",
    authenticate,
    authorization("admin", "seller"),
    validationMiddleware(updateProductSchema),
    productController.updateProduct
);

// delete product:
router.post(
    "/delete/:id",
    authenticate,
    authorization("admin", "seller"),
    productController.deleteProduct
);

module.exports=router;
