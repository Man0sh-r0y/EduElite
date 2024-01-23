# EdTech Platform

This is Full Stack the EdTech Platform built in modern Technology (MERN Stack).

## Backend API Testing

### User Routes

1. **Send OTP:**
   - **Method**: POST 
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/sendotp
     ```

1. **Sign Up:**
   - **Method:** POST
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/signup
     ```

1. **Login:**
   - **Method:** POST
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/login
     ```
     
1. **Change Password:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/changePassword
     ```

1. **Generate Forgot Password Token:**
   - **Method:** POST
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/forgotPasswordToken
     ```

1. **Reset Forgot Password:**
   - **Method:** POST
   - **API Route:**
     ```bash
      http://localhost:3000/api/v1/auth/resetForgotPassword
     ```

### User's Profile Routes

1. **Update Profile:**
   - **Method:** PUT
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/profile/updateProfile
     ```

2. **Delete Account:**
   - **Method:** DELETE
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/profile/deleteAccount
     ```

3. **Cancel Delete Account:**
   - **Method:** PUT
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/profile/cancelDeleteAccount
     ```

4. **Get All Details Of User:**
   - **Method:** GET
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/profile/getAllDetailsOfUser
     ```

5. **Update Display Picture:**
   - **Method:** PUT
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
     ```bash
     http://localhost:3000/api/v1/profile/updateDisplayPicture
     ```

6. **Get Enrolled Courses:**
   - **Method:** GET
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
     ```bash
     http://localhost:3000/api/v1/profile/getEnrolledCourses
     ```

### Course Routes

1. **Create Course:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/createCourse
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Show All Courses:**
   - **Method:** GET
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/showAllCourses
     ```

1. **Get Course Details:**
   - **Method:** GET
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/getCourseDetails
     ```

1. **Create Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/createSection
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Update Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/updateSection
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Delete Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/deleteSection
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Create Sub-Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/createSub-section
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Update Sub-Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/updateSub-section
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Delete Sub-Section:**
   - **Method:** POST
   - **Endpoint:**
     ```bash
     http://localhost:3000/api/v1/course/deleteSub-section
     ```
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)

1. **Create Category:**
    - **Method:** POST
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/createCategory
      ```
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Admin (using middleware `isAdmin`)

1. **Show All Categories:**
    - **Method:** GET
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/showAllCategories
      ```

1. **Category Page Details:**
    - **Method:** GET
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/categoryPageDetails
      ```

1. **Create Rating And Review:**
    - **Method:** POST
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/createRatingAndReview
      ```
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)

1. **Update Rating And Review:**
    - **Method:** POST
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/updateRatingAndReview
      ```
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)

1. **Delete Rating And Review:**
    - **Method:** POST
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/deleteRatingAndReview
      ```
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)

1. **Get Average Rating:**
    - **Method:** GET
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/getAverageRating
      ```

1. **Get All Ratings And Reviews:**
    - **Method:** GET
    - **Endpoint:**
      ```bash
      http://localhost:3000/api/v1/course/getAllRatingsAndReviews
      ```


## Razorpay Integration in Backend 

> RazorPay Docs: [Click Here](https://razorpay.com/docs/)

### How Razorpay works in Node.Js?

- User Click on `Buy Now` button
- The `product id` is fetched and sent to the Server
- Product Price is fetched through this id from the database
- This price is sent to the RazorPay API along with additional details like `currency`, `receipt` etc
- An `order id` sent to the Response
- We are going to pass this `order id` to check out
- After succesfull payment, Razorpay send `razorpay_payment_id`, `razorpay_signature`, `razorpay_order_id` in response
- We send them in our server to verify payment
- After verifying payment, We perform post tasks which are needed to do (Like Give access of the Course to Student) 

### Build Integration

**Payment Stages**: 

1. `Payment Stage 1`: Order State is created and payment state is also created. (Cutomer clicks on Buy Now button and submits the payment information which is sent to Razorpay But the payment isn't processed at this stage)

2. `Payment Stage 2`: Order State is attempted and Payment state is authorized/faild (An order movesfrom created to attempted state when payment is first attempted. It remains in this state until apayment associated with the order is captured.)
   
3. `Payment Stage 3`: Order State is paid and Payment state is captured (After the payment moves to the captured state, the order moves to the paid state. No more payment requests are allowed after an order moves to the paid state. The order continues to be in this state even if the payment for this order is refunded.)
> Order is an important step in the payment process.
> - An order should be created for every payment.
> - You can create an order using the Orders API. It is a server-side API call. Know how toauthenticate Orders API.
> - The `order_id` received in the response should be passed to the checkout. This ties the orderwith the payment and secures the request from being tampered. 
 
### Follow the below steps to integrate your Node.js-based website/app with Razorpay Payment Gateway.

1. **Install Razorpay Node.js SDK**: Open your project folder and run the following command on your command prompt to install the Razorpay Node.js SDK:
   ```bash
    npm install razorpay
   ```
2. **Instantiate Razorpay**:
   Add this code in the `config` directory of your backend code structure. This code snippet is importing the razorpay module in a Node.js application and then creating an instance of the Razorpay class. This instance is configured with the key_id and key_secret obtained from environment variables.
   ```js
    const Razorpay = require('razorpay'); 
    require('dotenv').config();

    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET
    });

    module.exports = instance; 
   ```
3. **Create an Order in Server**:
4. **Add Checkout Options**:
5. **Store Fields in Server**:
6. **Verify Payment Signature**:
7. **Verify Payment Status**:
