const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId;
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'  // القيمة الافتراضية ستكون مستخدم عادي
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    picture: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);
