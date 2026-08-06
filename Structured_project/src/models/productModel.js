const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    price: {
        type :Number ,
        required: true,
        trim:true
    },
    sku: {
         type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
    },
     description: {
        type: String,
        required: true,
        trim: true,
    },
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;