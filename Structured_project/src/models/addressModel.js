const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User" ,
        required : true 
    },
    type:{
        type: String,
        required: true
    },
    street : {
        type: String , 
        required: true 
    },
    city: {
        type: String ,
        required: true 
    },
    state : {
        type:String ,
        required : true
    },
    country : {
        type : String,
        required: true
    },
    pincode : {
        type : String ,
        required : true
    },
    location: {
        type: {
            type: String , 
            enum: ["Point"],
            required:true,
        },
        coordinates:{
            type: [Number],
            required: true
        }
    }
},
{
    timestamps:true
}
);

// create 2dsphere index for geospatial queries
addressSchema.index({ location: '2dsphere' });

module.exports = require('mongoose').model('Address', addressSchema);























































































































