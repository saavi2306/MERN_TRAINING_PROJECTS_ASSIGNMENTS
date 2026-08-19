const mongoose = require("mongoose");

//    name,SKU, description, price,category
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim:true
    },
    SKU:{
        unique:true,
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:100,
        minLength:2
    },
    price:{
        type : Number,
        required:true,
        trim: true,
        min: 0 
    }
})

let productModel;

productModel = mongoose.model(
    "product", productSchema
)

module.exports=productModel;


