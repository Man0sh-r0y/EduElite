const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');
const {uploadImageToCloudinary} = require('../utils/imageUploader');

// Course Creation:
// 1. Fetch data from request body 
// 2. Validate the data
// 3. Check if the user is instructor or not as only instructor can create a course
// 4. Check if the category exists or not as instructor can only create a course in existing category 
// As anyone can can send a custom category through postman while API call. Only admin can create a new category
// 5. Upload thumbnail to cloudinary
// 6. Create an entry for new course in database
// 7. Add the newly created course to the instructor's courses array

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

        // add the newly created course to the instructor's courses array (Only adding its ID)
        await User.updateOne({userID},{
            $push: {
                courses: course._id,
            }});
        
        //return response
        return res.status(200).json({
            success: true,
            message: "Course Created Successfully",
            data: course,
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Failed to create Course',
            error: error.message
        })
    }
}

// get all Courses 
exports.showAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find({}, {
            courseName: true,
            price: true,
            thumbnail: true,
            instructor: true,
            ratingAndReviews: true,
            studentsEnrolled: true,
        }); // finding all courses data and the result should have these mentioned parameter

        return res.status(200).json({
            success: true,
            message: 'Data for all courses fetched successfully',
            data: allCourses,
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Cannot Fetch course data',
            error: error.message,
        })
    }
}