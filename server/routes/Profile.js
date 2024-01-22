const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {updateProfile, deleteAccount, cancelDeleteAccount, getAllDetailsOfUser, updateDisplayPicture, getEnrolledCourses} = require('../controllers/Profile');
const {auth} = require('../middleware/auth');

// define the routes
router.put('/update-profile', auth, updateProfile); // Make a route for updateProfile
router.delete('/delete-account', auth, deleteAccount); // Make a route for deleteAccount
router.put('/cancel-delete-account', auth, cancelDeleteAccount); // Make a route for cancelDeleteAccount
router.get('/get-all-details-of-user', auth, getAllDetailsOfUser); // Make a route for getAllDetailsOfUser
router.put('/update-display-picture', auth, updateDisplayPicture); // Make a route for updateDisplayPicture
router.get('/get-enrolled-courses', auth, getEnrolledCourses); // Make a route for getEnrolledCourses

module.exports = router; // Export the router so we can use it in the server.js file

