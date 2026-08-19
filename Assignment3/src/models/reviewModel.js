const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title:{
        type: String ,
        required: [true, "title is required"] ,
        trim : true ,
        minlength : 3 ,
        maxlength : 80 ,
    },
    comment :{
        type: String,
        required: [true,"a comment is required"],
        trim: true,
        minlength:10,
        maxlength:100
    },
    rating:{
        type: Number,
        required: [true, "rating is required"],
        min : 1 ,
        max: 5 ,
        validate :{
            validator: function (value){
                return Number.isInteger(value);
            }
        }
    },
    reviewerName :{
        type:String,
        trim:true,
        minlength:2,
        maxlength:50
    },
    status:{
        type:String,
        enum : {
            values:["pending" , "approved" , "rejected"] ,
            message:"{VALUE} is not a valid status"},
        default : "pending"
    },
    isVerifiedPurchase:{
        type: Boolean ,
        default : false
    }
},
{timestamps:true}
)

const ReviewModel = mongoose.model("review" , reviewSchema);

module.exports = ReviewModel;