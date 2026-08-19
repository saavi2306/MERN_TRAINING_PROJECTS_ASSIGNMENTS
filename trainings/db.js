const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
// 1.1.1.1 => cloud fare dns 
// 8.8.8.8 => ggl


const connectDB = async()=>{
    await mongoose.connect (process.env.URL);
    console.log("db connection establishsed.");
}
module.exports=connectDB;
