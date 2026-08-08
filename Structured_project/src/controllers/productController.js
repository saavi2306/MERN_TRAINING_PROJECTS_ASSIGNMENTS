const productService = require("../services/productService");

const createProduct = async (req, res) => {
    try{
        const product = await productService.createProduct(req.body);
        res.status(201).json({
            success:true,
            message:"Product created successfully",
            data: product,
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}

// get product all
// here we pass req.query because we will get the page number and the limit from the query 
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);

        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// get product id:
const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);

        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

// update product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

// delete product
const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};

