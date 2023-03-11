const express = require('express');

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

router.get('/users' , getAllUsers);
router.post('/createUser' , createUserValidator , createUser);
router.put('/updateUser/:id' , updateUserValidator , updateUser);
router.delete('/deleteUser/:id' , deleteUserValidator , deleteUser);

module.exports = router;