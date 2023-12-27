const nodemailer = require('nodemailer'); // import nodemailer
require('dotenv').config(); // import dotenv

const mailSender = async (email, title, body) => {
    try{
        // create transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        })

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `StudyNotion`,
            to: `${email}`,
            subject: `${title}`,
            text: `${body}`
        });

        // printing the sent mail info
        console.log(`printing the sent mail info: ${info}`);

        return info;

    } catch (error) {
        console.log(`Error occured while sending mail through transporter: ${error}`);
    }
}

module.exports = mailSender;