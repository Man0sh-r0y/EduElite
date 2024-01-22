const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {sendOTP, signUp, login, changePassword} = require('../controllers/Auth');
const {generateForgotPasswordToken, resetForgotPassword} = require('../controllers/ForgetPassword');