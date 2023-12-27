const mongoose = require('mongoose'); // importing mongoose library

// creating a schema for course
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    courseDescription: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        required: true, // defining the constraint
        ref: 'User' // referencing the User model
    },
    whatYouWillLearn: {
        type: String, // defining the data type
        trim: true, // removes whitespace from both ends of a string
    },
    courseContent: [{
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        ref: 'CourseContentSection' // referencing the CourseContent model
    }],
    ratingsAndReviews: [{
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        ref: 'RatingAndReview' // referencing the RatingAndReview model
    }],
    price: {
        type: Number, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    thumbnail: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        ref: 'Tag' // referencing the Tag model
    },
    studentEnrolled: [{
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        ref: 'User' // referencing the User model
    }]
});

module.exports = mongoose.model('Course', courseSchema); // exporting the model