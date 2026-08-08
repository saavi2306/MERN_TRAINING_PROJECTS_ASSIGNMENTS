const express = require("express");
const router = express.Router();

const validationMiddleware = require("../middleware/validationMiddleware");
const { createProductSchema , updateProductSchema} = require("../validations/productValidation");
const productController = require("../controllers/productController");

// create the product
router.post("/create" ,
     validationMiddleware(createProductSchema), 
     productController.createProduct);

// get all products:
router.get("/getAll" , 
    productController.getAllProducts // no validation required because we are only fetching the data;
);

// get product by id:
 router.get("/getId/:id" ,
    productController.getProductById
 );

//  update product:
router.post("/update/:id" , 
    validationMiddleware(updateProductSchema),
    productController.updateProduct
);

// delete product:
router.post("/delete/:id" , 
    productController.deleteProduct
)

module.exports=router;
