const mongoose = require('mongoose');// importing mongoose library

const courseProgressSchema = new mongoose.Schema({
    courseID: {
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        required: true, // defining the constraint
        ref: 'Course' // referencing the Course model
    },
    completedVideos: [{
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        required: true, // defining the constraint
        ref: 'CourseContentSubSection' // referencing the CourseContentSubSection model
    }]
});

module.exports = mongoose.model('CourseProgress', courseProgressSchema); // exporting the model