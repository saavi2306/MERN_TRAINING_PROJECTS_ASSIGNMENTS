const mongoose = require("mongoose");
const dns = require("dns");
const dotenv = require("dotenv");
dotenv.config();

const mongo_URL = process.env.DB_URL;
const url = mongo_URL;

const connectDB = async()=>{
    await mongoose.connect(url);
    console.log("DataBase Connected"); 
}

dns.setServers(["8.8.8.8", "1.1.1.1"]);
