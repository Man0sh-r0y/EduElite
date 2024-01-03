const transporter = require('../config/sendMailConfig'); // import nodemailer
require('dotenv').config(); // import dotenv

const mailSender = async (email, title, body) => {
    try{
        // send mail with defined transport object
        return await transporter.sendMail({
            from: `StudyNotion`,
            to: `${email}`,
            subject: `${title}`,
            text: `${body}`
        });
    } catch (error) {
        console.log(`Error occured while sending mail through transporter: ${error}`);
    }
}

module.exports = mailSender;