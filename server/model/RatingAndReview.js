const mongoose = require('mongoose'); // importing mongoose library

const ratingAndReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // defining the data type
        required: true, // defining the constraint
        ref: 'User' // referencing the User model
    },
    rating: {
        type: Number, // defining the data type
        required: true, // defining the constraint
    },
    review: {
        type: String, // defining the data type
        required: true, // defining the constraint
    }
});

module.exports = mongoose.model('RatingAndReview', ratingAndReviewSchema); // exporting the model