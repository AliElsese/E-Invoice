const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validator-middleware');

exports.userLoginValidator = [
    check('userId').notEmpty().withMessage('Username Is Required')
    .isMongoId().withMessage('Invalid User Id Format'),
    
    check('password').notEmpty().withMessage('Password Is Required'),

    validatorMiddleware
]