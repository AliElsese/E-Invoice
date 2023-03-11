const { check } = require('express-validator');
const ApiError = require('../apiError');
const validatorMiddleware = require('../../middlewares/validator-middleware');

const UserModel = require('../../models/user-model');

exports.createUserValidator = [
    check('username').notEmpty().withMessage('Username Is Required')
    .custom(async (val) => {
        await UserModel.findOne({ username: val }).then((user) => {
            if(user) {
                return new ApiError('Username Already Exists' , 500);
            }
        })
    }),

    check('password').notEmpty().withMessage('Password Is Required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    validatorMiddleware
]

exports.getUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id Format'),
    
    validatorMiddleware
]

exports.updateUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id Format'),
    
    validatorMiddleware
]

exports.deleteUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id Format'),

    validatorMiddleware
]