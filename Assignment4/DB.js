const mongoose = require("mongoose");
const dns = require("dns");


dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const connectDB = async ()=>{
    try{
        if(!process.env.MONGO_URL){
        throw new Error("Mongo_URL is required");}
        await mongoose.connect(process.env.MONGO_URL);
        console.log("dataBase connected");
    }
    catch(err){
        console.log(err)
        throw err;
    }
};

module.exports= connectDB