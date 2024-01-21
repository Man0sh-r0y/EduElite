const RatingAndReview = require('../models/RatingAndReview'); // importing the model
const Course = require('../models/Course'); // importing the model
const User = require('../models/User'); // importing the model
const { mongo, default: mongoose } = require("mongoose");

// Create a rating and review
exports.createRatingAndReview = async (req, res) => {

    try {
        // Getting the rating and review from the request body
        const { rating, review, courseId} = req.body; 
        // Getting the userId from the req.user object
        const userId = req.user.id;

        const course = await Course.findById(courseId); // finding the course by the courseId

        // check if Students is enrolled to the course
        const isStudentEnrolled = course?.studentEnrolled.forEach(studentId => {
            if (studentId === new mongoose.Types.ObjectId(userId)) { // User id can be in String format, so we need to convert it to ObjectId
                return true;
            }
        });

        if(!isStudentEnrolled) {
            return res.status(400).json({
                success: false,
                message: 'Student is not enrolled to the course'
            })
        }

        // Check if User already rated and reviewed the course
        const alreadyRatedAndReviewed = await RatingAndReview.findOne({
            user: userId,
            course: courseId
        });

        if(alreadyRatedAndReviewed) {
            return res.status(400).json({
                success: false,
                message: 'Student already rated and reviewed the course'
            })
        }

        // Create a new rating and review
        const newRatingAndReview = new RatingAndReview.create({
            rating: rating,
            review: review,
            user: userId,
            course: courseId
        });

        // Update the course ratings and reviews
        course.ratingsAndReviews.push(newRatingAndReview._id);

        return res.status(200).json({
            success: true,
            message: `Rating and Review created successfully in the course ${course.courseName}`
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error occurred while creating the rating and review'
        });
    }
}

// Update a rating and review
exports.updateRatingAndReview = async (req, res) => {

    try {
        // Fetch the rating and review id from the request params
        const {rating, review, courseId} = req.body;

        // Get the user id
        const userId = req.user.id;

        const course = await Course.findById(courseId); // finding the course by the courseId
        if(!course) {
            return res.status(400).json({
                success: false,
                message: 'Course does not exist'
            });
        }

        // Find the rating and review by the id
        const ratingAndReview = await RatingAndReview.findOne({
            user: userId,
            course: courseId
        });

        // Validate the rating and review
        if(!ratingAndReview) {
            return res.status(400).json({
                success: false,
                message: 'Rating and Review created by the user does not exist'
            });
        }

        // Check if the rating exists
        if(rating) {
            ratingAndReview.rating = rating;
        }
        // Check if the review exists
        if(review) {
            ratingAndReview.review = review;
        }

        // Save the rating and review
        await ratingAndReview.save();

        return res.status(200).json({
            success: true,
            message: `Rating and Review updated successfully for the course ${course.courseName}`
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error occurred while updating the rating and review created by the user'
        });
    }
}

// Delete a rating and review
exports.deleteRatingAndReview = async (req, res) => {

    try {
        
        // Fetch the rating and review id from the request body
        const {ratingAndReviewId} = req.body;

        // Get the user id
        const userId = req.user.id;
        const user = await User.findById(userId); // finding the user by the userId

        // Find the rating and review by the id
        const ratingAndReview = await RatingAndReview.findById(ratingAndReviewId);

        // Validate the rating and review
        if(!ratingAndReview) {
            return res.status(400).json({
                success: false,
                message: `Rating and Review created by the user ${user.firstName} ${user.lastName} does not exist`
            });
        }

        // Check if the user is the owner of the rating and review
        if(ratingAndReview.user.toString() !== userId) { // userId is in String format and ratingAndReview.user is in ObjectId format
            return res.status(401).json({
                success: false,
                message: `User ${user.firstName} ${user.lastName} is not authorized to delete the rating and review`
            });
        }

        // Delete the rating and review
        await ratingAndReview.remove();

        return res.status(200).json({
            success: true,
            message: `Rating and Review created by the user ${user.firstName} ${user.lastName} deleted successfully`
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error occurred while deleting the rating and review created by the user'
        });
    }
}