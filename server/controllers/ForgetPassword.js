const User = require('../models/user');
const mailSender = require('../utils/mailSender');
const bcrypt = require('bcrypt');

// LOGIC:
// if User forgot the password, 
// then user can click on forgot password button 
// Then a link will be sent to user's email
// and if user click on that link
// then user will be redirected to forgot password page
// for this link, I have to generate a token 
// And Link will be like this: `http://localhost:3000/update-password/${token}`
// The token will be valid for 10 minutes
// so the link will also be valid for 10 minutes
// If we don't do this, then user can change password for any number of times

// generate token
exports.generateForgotPasswordToken = async (req, res) => {
    try {
        // Fetch email from req body
        const { email } = req.body;

        // check if user exists in DataBase
        if(!await User.findOne({ email })) {
            return res.status(401).json({
                success: false,
                message: "User does not exists"
            });
        }

        // generate token
        const token = crypto.randomUUID(); // this will generate a random token
        
        // When User click on the link which is sent to email, it will be redirected to reset password page
        // To reset password, User have to send new password and confirm password along with the token
        // so This token will help to fetch the user from the database in the Backend
        // so the token need to be stored in the DataBase in the user's document

        const updatedUser = await User.findOneAndUpdate({ email }, { token: token, expires: Date.now() + 5 * 60 * 1000 }, { new: true }); // find user with email and add token to the user's document

        // create URL
        const url = `http://localhost:3000/update-password/${token}`; // this URL will be sent to user's email

        // send email to user
        await mailSender.sendMail(email, "Reset Password", `Click on the link to reset password: ${url}`);

        // send response
        res.status(200).json({
            success: true,
            message: "Email sent successfully, please check your email"
        });
        
    } catch (error) {
        
    }
}
