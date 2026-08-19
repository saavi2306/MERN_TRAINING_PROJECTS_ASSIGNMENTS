const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (userData)=>{
    // receive data
    const {name, email, password, role} = userData;

    // check if the user already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
        role: role || "buyer",
    });
    return user;
}

const login = async (loginData)=>{
   const {email , password} = loginData;
   
   const user = await userModel.findOne({email});
   if(!user){
    throw new Error ("Invalid email or password");
   }
    // when the user with the email exists:
    const comparePass = await bcrypt.compare(password,user.password)
    if(!comparePass){
        throw new Error("Invalid Credentials");
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is required");
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );

    return { user, token };
}


module.exports = {
    register,
    login,
};