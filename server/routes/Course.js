const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import the controllers
const {createCourse, showAllCourses, getCourseDetails} = require('../controllers/Course');
const {createSection, updateSection, deleteSection} = require('../controllers/CourseContentSection');
const {createSubSection, updateSubSection, deleteSubSection} = require('../controllers/CourseContentSubSection');
const {createCategory, showAllCategories, categoryPageDetails} = require('../controllers/Category');
const {createRatingAndReview, updateRatingAndReview, deleteRatingAndReview, getAverageRating, getAllRatingsAndReviews} = require('../controllers/RatingsAndReviews');