const Product = require("../models/productModel");

const createProduct = async (productData, ownerId) => {
    const { sku } = productData;

    const existingProduct = await Product.findOne({ sku });

    if (existingProduct) {
        throw new Error("SKU already exists");
    }

    const product = await Product.create({
        ...productData,
        owner: ownerId,
    });

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

const updateProduct = async (id, productData, user) => {
    const product = await Product.findById(id);

    if (!product) {
        throw new Error("Product not found");
    }

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

    if (user.role !== "admin" && product.owner.toString() !== user.id) {
        throw new Error("You are not authorized to update this product");
    }

    Object.assign(product, productData);
    const updatedProduct = await product.save();

    return updatedProduct;
};

const deleteProduct = async (id, user) => {
    const product = await Product.findById(id);

    if (!product) {
        throw new Error("Product not found");
    }

    if (user.role !== "admin" && product.owner.toString() !== user.id) {
        throw new Error("You are not authorized to delete this product");
    }

    const deletedProduct = await product.deleteOne();
    return deletedProduct;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};


