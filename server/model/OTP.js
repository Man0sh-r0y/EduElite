const mongoose = require('mongoose'); // importing mongoose library

// creating a schema for OTP
const OTPSchema = new mongoose.Schema({
    email: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    otp: {
        type: Number, // defining the data type
        required: true, // defining the constraint
    },
    createdAt: {
        type: Date, // defining the data type
        required: true, // defining the constraint
        default: Date.now(), // defining the default value
        expires: 5*60 // defining the expiry time to 5 minutes
    }
});

module.exports = mongoose.model('OTP', OTPSchema); // exporting the model