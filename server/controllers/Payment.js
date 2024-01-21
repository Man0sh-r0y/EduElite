const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

// Capture the payment and initiate the Razorpay order
exports.capturePayment = async (req, res) => {

    try {
        // Get the courseId and UserId from the request body
        const { courseId } = req.body;
        const userId = req.user.id;

        // Validation checks for courseId and userId
        if (!courseId) {
            return res.json({
                success: false,
                message: 'Course id not found'
            });
        }

        // Validate course Details
        const course = await Course.findById(courseId);
        if (!course) {
            return res.json({
                success: false,
                message: 'Could not find the course'
            });
        }

        // Convert userId to ObjectId as it is stored as ObjectId in the database
        const userObjectId = new mongoose.Types.ObjectId(userId); // userId could be a string or another type 
        // Check if the user is already enrolled in the course
        course.studentEnrolled.forEach((studentId) => { // studentEnrolled is an array of ObjectIds of students enrolled in the course
            // As here I'm comparing userObjectId with studentId,so I've converted userId's format to ObjectId above
            // Comparing couldn't take place directly as userId is a string and studentId is an ObjectId
            if (studentId.equals(userObjectId)) {
                return res.json({
                    success: false,
                    message: `Student is already enrolled in the course ${course.courseName}`
                });
            }
        });

        // Create an Order
        const options = {
            amount: course.price * 100, // amount in the smallest currency unit
            currency: "INR", // currency is always in INR
            receipt: Math.random(Date.now()).toString(), // ideally it should be the order id
            notes: { // notes is an optional parameter
                courseId: courseId,
                userId: userId
            }
        };

        // Now initiate the payment using razorpay
        // When the order is created successfully, an order_id is returned in the response
        // You need to store it against the order defined in your system.
        const paymentResponse = await instance.orders.create(options);

        console.log(`Payment Response after creating the order: ${paymentResponse}`); // printing the response on the console

        return res.status(200).json({
            success: true,
            courseName: course.courseName,
            courseDescription: course.courseDescription,
            thumbnail: course.thumbnail,
            orderId: paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occured while creating order on Razorpay",
            error: error.message
        })
    }
};

// Verify Signature of Razorpay and Server
exports.verifySignature = async (req, res) => {

    try {
        // Fetch the details of the payment
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        // Validate the payment details
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.json({
                success: false,
                message: 'Payment details not found'
            });
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id; // Concatenating the order_id and payment_id as per the documentation of Razorpay
        //const generatedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET).update(sign.toString()).digest('hex'); 
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET); // createHmac() method is used to create HMAC objects
        // createHmac() method is used to create HMAC objects
        // sha256 is the hashing algorithm used to create HMAC
        // update() method is used to update the HMAC object with the given data (sign.toString())
        // digest() method is used to return the encoded HMAC data in the desired format
        // hex is the desired format in which the encoded HMAC data is returned
    } catch (error) {
        
    }
};