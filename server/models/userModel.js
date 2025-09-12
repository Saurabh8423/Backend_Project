const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

//Static Signup function *****************
userSchema.statics.signup = async (email, password) => {
    const exists = await User.findOne({ email })
    if (exists) {
        throw Error("Email already exist!");

    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hash });
    return user;
};


const User = new mongoose.model("User", userSchema);
module.exports = User;