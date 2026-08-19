const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB");
const reviewRoutes = require("./src/routes/review.route");
const app = express();

// reviewRoute
app.use("/review" , reviewRoutes);





connectDB().then(()=>{
app.listen(PORT , ()=>{
    console.log("server running");
})
})
.catch((err)=>{
    console.log(err);
})

