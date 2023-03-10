const express = require('express');

// User Service
const {
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user-controller')

const router = express.Router();

router.post('/createUser' , createUser);
router.put('/updateUser/:id' , updateUser);
router.delete('/deleteUser/:id' , deleteUser);

module.exports = router;