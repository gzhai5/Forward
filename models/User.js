const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // save the user pwd in hash so that no one know the exact pwd, including admin

const UserSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: [true, "Please provide us a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide us an email address"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
    },
    customerId: {
        type: String,
        default: ""
    },
    subscription: {
        type: String,
        default: ""
    },
});

//hash password before saving to database
UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) { 
        next();
    }
    const salt = await bcrypt.genSalt(10);  // getSalt value could be increased to enhance safety
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//match passwords
UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

//sign JWT and return
UserSchema.methods.getSignedJwtToken = function(res) { 
    const accessToken = jwt.sign({ id: this._id }, process.env.APPSETTING_JWT_ACCESS_SECRET, { expiresIn: process.env.APPSETTING_JWT_ACCESS_EXPIRE });
    const refreshToken = jwt.sign({ id: this._id }, process.env.APPSETTING_JWT_REFRESH_SECRET, { expiresIn: process.env.APPSETTING_JWT_REFRESH_EXPIRE });
    res.cookie('refreshToken', `${refreshToken}`, { maxAge: 86400 * 7000, httpOnly: true });
    return { accessToken, refreshToken };
}

const User = mongoose.model("User", UserSchema);

module.exports = User;