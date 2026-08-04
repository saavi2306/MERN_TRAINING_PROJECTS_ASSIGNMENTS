const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:4,
        maxLength:40,
    },
    email:{
        type:String,
        minLength:10,
        maxLength:40,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        minLength:8,
        maxLength:100,
        required:true
    }
})


// user model
let userModel;

 userModel =  mongoose.model(
    "user",userSchema
)


module.exports=userModel;