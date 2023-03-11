const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const UserModel = require('../models/user-model');

const generateToken = (payload) => {
    return jwt.sign({userId: payload} , process.env.JWT_SECRET_KEY , {
        expiresIn: process.env.JWT_EXPIRE_TIME
    });
}

module.exports = {
    getActiveUsers : asyncHandler(async(req , res) => {
        const users = await UserModel.find({ isActive: true });
        res.status(200).json({
            results: users.length,
            data: users
        });
    }),

    getUserCompanies : asyncHandler(async (req , res , next) => {
        const { id } = req.params;

        const user = await UserModel.findById({ _id: id } , { companies: 1 });
        if(!user) {
            next(new ApiError('User not found' , 404));
        }
        else {
            res.status(200).json({ data: user });
        }
    }),

    userLogin : asyncHandler(async (req , res , next) => {
        const user = await UserModel.findOne({ _id: req.body.userId });
        if(!user || !(await bcrypt.compare(req.body.password , user.password))) {
            next(new ApiError('Username Or Password Is Incorrect' , 401));
        }
        else {
            const token = generateToken(user._id);
            res.status(200).json({ data: user , token });
        }
    }),
}