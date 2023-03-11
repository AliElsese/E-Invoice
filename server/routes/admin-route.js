const express = require('express');

const { checkToken } = require('../controllers/auth-controller')

// User Validators
const {
    createUserValidator,
    updateUserValidator,
    deleteUserValidator
} = require('../utils/validators/admin-validator');

// User Services
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/admin-controller');

const router = express.Router();

router.get('/users' , checkToken , getAllUsers);
router.post('/createUser' , checkToken , createUserValidator , createUser);
router.put('/updateUser/:id' , checkToken , updateUserValidator , updateUser);
router.delete('/deleteUser/:id' , checkToken , deleteUserValidator , deleteUser);

module.exports = router;