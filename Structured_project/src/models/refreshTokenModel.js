const mongoose = require("mongoose");
const { applyTimestamps } = require("./addressModel");

const refreshSchema = mongoose.Schema({
    refreshToken:{
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'auth',
        required : true
    },
    expiredAt:{
        type:Date,
        required: true
    }
},{timestamps:true , strict:true})
