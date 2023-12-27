const mongoose = require('mongoose');  // importing mongoose library

const tagSchema = new mongoose.Schema({
    name: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    description: {
        type: String, // defining the data type
        required: true, // defining the constraint
        trim: true, // removes whitespace from both ends of a string
    },
    course: {
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        required: true, // defining the constraint
        ref: 'Course' // referencing the Course model
    }
});

module.exports = mongoose.model('Tag', tagSchema); // exporting the model