const express = require('express'); // import express
const app = express(); // initialize express
require('dotenv').config(); // import dotenv

// Import Routes from routes folder
const userRoutes = require('./routes/User');
const profileRoutes = require('./routes/Profile');
const courseRoutes = require('./routes/Course');
const paymentRoutes = require('./routes/Payment');

// import all the other required modules
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {cloudinaryConnect} = require('./config/cloudinary');
const fileUpload = require('express-fileupload');