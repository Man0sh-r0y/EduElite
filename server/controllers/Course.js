const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');
const {uploadImageToCloudinary} = require('../utils/imageUploader');

// Create course
exports.createCourse = async (req, res) => {
    try {
        // fetch data and files from request body
        const {courseName, courseDescription, whatYouWillLearn, price, category} = req.body;
        const {thumbnail} = req.files;

        // validation check
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !category || !thumbnail) {
            return res.status(400).json({
                errorMessage: 'Please enter all required fields.'
            });
        }
        
        // check for instructor
        const userID = req.user.id; // previously we have set the user id in req.user.id while authenticating the user in auth.js middleware
        const user = await User.findById(userID, {
            accountType: "Instructor"
        }); // finding the user by id and the result should have accountType as Instructor

        // check if the user is instructor or not
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Instructor detials not found. You are not authorized to create a course.'
            });
        }

        // check if the category exists or not
        const categoryDetails = await Category.findById(category); // here category is just an id of that category
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: 'Category not found.'
            });
        }

        // upload thumbnail to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create an entry for new course in database
        const course = await Course.create({
            courseName,
            courseDescription,
            instructor: userID,
            whatYouWillLearn,
            price,
            category,
            thumbnail: thumbnailImage.secure_url
        });

    } catch (error) {
        
    }
}