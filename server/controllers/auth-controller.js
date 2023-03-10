const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const UserModel = require('../models/user-model');

module.exports = {
    getAllUsers : asyncHandler(async(req , res) => {
        const users = await UserModel.find({});
        res.status(200).json({
            results: users.length,
            data: users
        });
    }),

    getUserCompanies : asyncHandler(async (req , res) => {
        const { id } = req.params;

        const user = await UserModel.findById({ _id: id } , { companies: 1 });
        if(!user) {
            next(new ApiError('User not found' , 404));
        }
        else {
            res.status(200).json({ data: user });
        }
    })
}