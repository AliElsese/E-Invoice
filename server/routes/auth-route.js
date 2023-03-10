const express = require('express');

// User Service
const {
    getAllUsers,
    getUserCompanies
} = require('../controllers/user-controller')

const router = express.Router();

router.get('/getAllUsers' , getAllUsers);
router.get('/getUserCompanies/:id' , getUserCompanies);

module.exports = router;