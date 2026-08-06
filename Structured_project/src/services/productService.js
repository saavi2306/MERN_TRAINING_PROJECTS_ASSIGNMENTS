const Product = require("../models/productModel");

const createProduct = async (productData) => {
    const { sku } = productData;

    const existingProduct = await Product.findOne({ sku });

    if (existingProduct) {
        throw new Error("SKU already exists");
    }

    const product = await Product.create(productData);

    return product;
};

const getAllProducts = async (query) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const sort = query.sort || "createdAt";

    const skip = (page - 1) * limit;

    const products = await Product.find()
        .skip(skip)
        .limit(limit)
        .sort(sort);

    return products;
};

const getProductById = async (id) => {
    const product = await Product.findById(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};

const updateProduct = async (id, productData) => {
    if (productData.sku) {
        const existingProduct = await Product.findOne({
            sku: productData.sku,
        });

        if (
            existingProduct &&
            existingProduct._id.toString() !== id
        ) {
            throw new Error("SKU already exists");
        }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        id,
        productData,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedProduct) {
        throw new Error("Product not found");
    }

    return updatedProduct;
};

const deleteProduct = async (id) => {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
        throw new Error("Product not found");
    }

    return deletedProduct;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};


