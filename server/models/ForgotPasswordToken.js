const mongoose = require('mongoose');

const ForgotPasswordTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        trim: true
    },
    expires: {
        type: Date,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('ForgotPasswordToken', ForgotPasswordTokenSchema);