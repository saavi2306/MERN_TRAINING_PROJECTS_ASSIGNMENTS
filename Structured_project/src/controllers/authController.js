const authservices = require("../services/authServices");


const register = async (req ,res)=>{
    try{
        const user = await authservices.register(req.body);
        res.status(201).json({
            message:"User registered successfully"
        })
    }
    catch{
        res.status(500).json({
            success:false ,
            message: error.message
        });
    }
}

const login = async (req ,res)=>{
    try{
        const result = await authservices.login(req.body);

        res.cookie("token" , result.token , {
            httpOnly:true,
            maxAge: 60* 60 * 1000 //expires in 1 hour 
        })

        res.status(200).json({
            success:true,
            message:"User logged in successfully"
        })
    }
    catch{
        res.status(500).json({
            success:false ,
            message: error.message
        });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");

        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    resiter , login , logout
}