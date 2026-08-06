const mongoose = required("mongoose");
const dns = require("dns");

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("dataBase connected");
    }
    catch(err){
        console.log(err)
    }
};

module.exports = connectDB;