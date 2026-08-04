const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
// 1.1.1.1 => cloud fare dns 
// 8.8.8.8 => ggl
const url = "mongodb+srv://saavi05:saavi.123@cluster0.vglau0o.mongodb.net/Assignment1"

const connectDB = async()=>{
    await mongoose.connect (url);
    console.log("db connection establishsed.");
}
module.exports=connectDB;
