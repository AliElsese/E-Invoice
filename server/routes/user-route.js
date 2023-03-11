const express = require('express');

// User Validators
const {
    createUserValidator,
    updateUserValidator,
    deleteUserValidator
} = require('../utils/validators/user-validator')

// User Services
const {
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user-controller')

const router = express.Router();

router.post('/createUser' , createUserValidator , createUser);
router.put('/updateUser/:id' , updateUserValidator , updateUser);
router.delete('/deleteUser/:id' , deleteUserValidator , deleteUser);

module.exports = router;