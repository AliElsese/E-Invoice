const express = require('express');

// Auth Validators
const {
    userLoginValidator
} = require('../utils/validators/auth-validator');

// Auth Services
const {
    getAllUsers,
    getUserCompanies,
    userLogin
} = require('../controllers/auth-controller')

const router = express.Router();

router.get('/getAllUsers' , getAllUsers);
router.get('/getUserCompanies/:id' , getUserCompanies);
router.post('/login' , userLoginValidator , userLogin);

module.exports = router;