const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {createCourse, showAllCourses, getCourseDetails} = require('../controllers/Course');
const {createSection, updateSection, deleteSection} = require('../controllers/CourseContentSection');
const {createSubSection, updateSubSection, deleteSubSection} = require('../controllers/CourseContentSubSection');
const {createCategory, showAllCategories, categoryPageDetails} = require('../controllers/Category');
const {createRatingAndReview, updateRatingAndReview, deleteRatingAndReview, getAverageRating, getAllRatingsAndReviews} = require('../controllers/RatingsAndReviews');
const {auth, isStudent, isInstructor, isAdmin} = require('../middleware/auth');

// define the routes
router.post('/create-course', auth, isInstructor, createCourse); // Make a route for createCourse
router.get('/show-all-courses', showAllCourses); // Make a route for showAllCourses
router.get('/get-course-details', getCourseDetails); // Make a route for getCourseDetails
router.post('/create-section', auth, isInstructor, createSection); // Make a route for createSection
router.post('/update-section', auth, isInstructor, updateSection); // Make a route for updateSection
router.post('/delete-section', auth, isInstructor, deleteSection); // Make a route for deleteSection
router.post('/create-sub-section', auth, isInstructor, createSubSection); // Make a route for createSubSection
router.post('/update-sub-section', auth, isInstructor, updateSubSection); // Make a route for updateSubSection
router.post('/delete-sub-section', auth, isInstructor, deleteSubSection); // Make a route for deleteSubSection
router.post('/create-category', auth, isAdmin, createCategory); // Make a route for createCategory
router.get('/show-all-categories', showAllCategories); // Make a route for showAllCategories
router.get('/category-page-details', categoryPageDetails); // Make a route for categoryPageDetails
router.post('/create-rating-and-review', auth, isStudent, createRatingAndReview); // Make a route for createRatingAndReview
router.post('/update-rating-and-review', auth, isStudent, updateRatingAndReview); // Make a route for updateRatingAndReview
router.post('/delete-rating-and-review', auth, isStudent, deleteRatingAndReview); // Make a route for deleteRatingAndReview
router.get('/get-average-rating/', getAverageRating); // Make a route for getAverageRating
router.get('/get-all-ratings-and-reviews/', getAllRatingsAndReviews); // Make a route for getAllRatingsAndReviews

