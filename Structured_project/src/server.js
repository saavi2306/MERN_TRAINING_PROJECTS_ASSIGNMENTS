const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./db");
dotenv.config();
const app = express();

// importing the routes 
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");

app.use(express.json()); //express does not automatically understands json so without this when the req.body will have json values it bbecomes undefined.
app.use(cookieParser()); //without this req.cookies is undefined


// defining the routes here
app.use("/auth" , authRouter); // jo bhi req /auth se aaye use authRouter pe bhejdena or jo bhi req
app.use("/product" , productRouter);


// mongodb connection.
connectDB().then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log("server is running");
    })
}).catch((err)=>{
    console.log(err);
})