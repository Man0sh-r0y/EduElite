const mongoose = require('mongoose');  // importing mongoose library

// In the homepage there will be a catalog of courses.
// there will be listed course names which are called tags
// If you click on any tag, you will go to another page
// each tag will have its name, description and courses which are related to that tag
// suppose a  tag is 'web development'. If you click on the tag you will see will have its name and description and courses which are related to web development

// creating a schema for tags
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