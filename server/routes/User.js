const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {sendOTP, signUp, login, changePassword} = require('../controllers/Auth');
const {generateForgotPasswordToken, resetForgotPassword} = require('../controllers/ForgetPassword');
const {auth} = require('../middleware/auth');

// define the routes
router.post('/sendOTP', sendOTP);
router.post('/signUp', signUp);
router.post('/login', login);
router.post('/changePassword', auth, changePassword);
router.post('/forgotPassword', generateForgotPasswordToken);
router.post('/resetForgotPassword', resetForgotPassword);
