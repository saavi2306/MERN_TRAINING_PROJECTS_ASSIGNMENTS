const {config} = require("dotenv");
config();
const connectDB = require("./db.js");
const express = require("express");
const userModel = require("./models/userModel.js");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { log } = require("node:console");
const cookieParser = require("cookie-parser");
const productModel = require("./models/productModel.js");
const joi = required("joi");
app.use(express.json());
app.use(cookieParser());

// signup,signin,dashboard
// frontend


// registration 

app.post("/signup",validationMiddleware(signupValidation) ,async (req, res) => {
    try {
        const { name, email, password } = req.body;


        const hashedPassword = await bcrypt.hash(password,5);
        console.log(password);
        
        console.log(hashedPassword);
        
        await userModel.create({
            "name": name,
            "email": email,
            "password": hashedPassword
        })
        
        // const salt = bcrypt.genSalt(5);

        res.status(200).json({
            "mssge": "User signed up successfully"
        })

    }
    catch (err) {
        console.log(err);
        res.status(401).json({
            "error": "error while signin up"
        })
    }
})

// SIGNIN from user:

app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email
        })
        if(!user){
            return res.status(404).json({"message" : "user not found"})
        }
       
        const dbPass=user.password;
        const passwordMatched = await bcrypt.compare(password,dbPass);
        if(!passwordMatched){
            return res.json({"message":"invalid credentials"});
        }
        // JWT TOKEN CREATE:

        const token = await jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET
        )
          res.status(200).json({
            message:"User signed in"
        })

        // set cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000 // 60 seconds
        });
        res.status(200).json({"message":"user found"}
    );
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        });
    }
})



// product APIs
// createProduct
app.post("/createProduct" , async (req, res)=>{
    try{
        const  {name , SKU , description , price} = req.body;
        
        const productValidation = joi.object({
            name: joi.string().required(),
            SKU: joi.string().required(),
            description: joi.string().min(2).max(100),
            price: joi.number().required().min(0).required()
        })
        if(!productValidation){
           return  res.status(402).json({"message":"invalid options"});
        }
        const alreadyExist = await productModel.findOne({
            if(alreadyExist){
                return res.json({"message":"Product already exists"});
            }
        })
        await productModel.create({
            "name": name ,
            "SKU" : SKU , 
            "description": description , 
            "price": price 
        })

        res.status(200).json({
            "message": "Product created successfully"
        })
    }
    catch (err){
        console.log(err);
        res.status(401).json({
            "error":"Product not created"
        })
    }
})

// getAllProducts:
app.get("/getAllProduct" , async (req , res)=>{
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.page) || 5;

        const skip = (page -1 ) * limit;

        const product = await productModel.find().skip(skip).limit(limit).sort({price:-1});

        res.status(200).json({
            product 
        })
    }
    catch(err){
        res.status(404).json({
            error: error.message
        })
    }
})

// GetProductById :
app.get("/singleProduct/:id" , async(req , res)=>{
    try{
        const id = req.params.id;

        const product = await productModel.findById(id);

        res.status(200).json({
            success: true , 
            product  
        });
    }
    catch(err){
        res.status(500).json({
        success: false , 
        message: error.message
        });
    }
})

// get

connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("server running");
    })
}).catch((err)=>{
    console.log(err)
})
