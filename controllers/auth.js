const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken(res);
    res.status(statusCode).json({ success:true,token});
}

exports.register = async (req, res, next) => {
    const { username, email, password } =req.body;

    const email_exist = await User.findOne({email});
    if (email_exist) {
        return next(new ErrorResponse("This email address has been used", 400)); 
    }

    try {
        const user = await User.create({ username, email, password });
        sendToken(user, 201, res);
    } catch (err) {
        next(err);
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email address or password", 400)); 
    }
    try {
        // check user already existed by email
        const user = await User.findOne({email});
        if (!user) {
            return next(new ErrorResponse("Invalid Credentials", 401)); 
        }

        // check pwd match
        const isMatch = await User.matchPasswords({password});
        if (!isMatch) {
            return next(new ErrorResponse("Invalid Credentials", 401)); 
        }

        sendToken(user, 200 ,res);
    } catch (err) {
        next(err);
    }
}

exports.logout = async (req, res, next) => {
    res.clearCookie('refreshToken');
    return res.status(200).json({ success: true, message: "Already Logged Out" });
}