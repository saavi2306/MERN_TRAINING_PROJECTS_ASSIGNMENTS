const express = require("express");
const env = require("dotenv");
const app = express();
const PORT = process.env.PORT;
// definig the required routes now!! 
// 
// 
// 
// 
// 
// 
connectDB().then(()=>{
app.listen(PORT , ()=>{
    console.log("server started");
});
}).catch((err)=>{
   console.log(err);
})



