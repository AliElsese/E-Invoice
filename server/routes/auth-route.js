const express = require('express');

// User Service
const {
    getAllUsers,
    getUserCompanies,
    userLogin
} = require('../controllers/auth-controller')

const router = express.Router();

router.get('/getAllUsers' , getAllUsers);
router.get('/getUserCompanies/:id' , getUserCompanies);
router.post('/login' , userLogin);

module.exports = router;