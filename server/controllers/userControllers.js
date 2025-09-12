const User = require("../models/userModel")

// Login user*********************
const loginUser = async(req, res) =>{
    res.json({msg:"User logged in!"});

}


// Signup User ******************

const signupUser =async(req, res) => {
    res.json({msg:"User signed up!"});
};


module.exports ={
    loginUser,
    signupUser
}


