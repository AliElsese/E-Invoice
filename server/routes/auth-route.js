const express = require('express');

// Auth Validators
const {
    userLoginValidator
} = require('../utils/validators/auth-validator');

// Auth Services
const {
    getActiveUsers,
    getUserCompanies,
    userLogin
} = require('../controllers/auth-controller')

const router = express.Router();

router.get('/getActiveUsers' , getActiveUsers);
router.get('/getUserCompanies/:id' , getUserCompanies);
router.post('/login' , userLoginValidator , userLogin);

module.exports = router;