const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {updateProfile, deleteAccount, cancelDeleteAccount, getAllDetailsOfUser} = require('../controllers/Profile');