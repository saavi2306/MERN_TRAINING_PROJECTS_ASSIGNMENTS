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


// app.post("/signup",validationMiddleware(signupValidation) ,async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password,5);        
//         await userModel.create({
//             "name": name,
//             "email": email,
//             "password": hashedPassword
//         })
        
//         // const salt = bcrypt.genSalt(5);

//         res.status(200).json({
//             "mssge": "User signed up successfully"
//         })

//     }
//     catch (err) {
//         console.log(err);
//         res.status(401).json({
//             "error": "error while signin up"
//         })
//     }
// })