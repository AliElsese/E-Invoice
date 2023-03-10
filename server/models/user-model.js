const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true , 'Username Required'],
        unique: true
    },
    password: {
        type: String,
        required: [true , 'Password Required'],
        minlength: [6 , 'Too Short Password']
    },
    role: {
        type: String,
        enum: ['user' , 'admin'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    companies: {
        type: Array,
        default: []
    }
}, { timestamps: true });

userSchema.pre('save' , async function (next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password , 12);
    next();
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;