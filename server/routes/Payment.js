const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controller
const {capturePayment, verifySignature} = require('../controllers/Payment');