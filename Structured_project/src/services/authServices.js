const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (userData)=>{
    // receive data
    const {name , email , password} = userData;

    // check if the user already exists
    const exist = await userModel.findOne({email}); // when the email exist it will return the whole object with that email and we made email unique.
    if(exist){
        throw new Error("Email already exists"); //we are using throw neew error brcause the service file have no access to the res , req object
    }
        // hash password
    const hashedPassword = await bcrypt.hash(password,5);

    // create the user 
    const user = await userModel.create({
        name : name ,
        email : email ,
        password: hashedPassword
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
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );

    return { user , token };
}

module.exports = {
    register,
    login,
};


