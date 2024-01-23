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
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/createCourse
     ```

2. **Show All Courses:**
   - **Method:** GET
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/course/showAllCourses
     ```

3. **Get Course Details:**
   - **Method:** GET
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/course/getCourseDetails
     ```

4. **Create Section:**
   - **Method:** POST
   - **Endpoint:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/createSection
     ```

5. **Update Section:**
   - **Method:** POST
   - **Endpoint:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/updateSection
     ```

6. **Delete Section:**
   - **Method:** POST
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/deleteSection
     ```

7. **Create Sub-Section:**
   - **Method:** POST
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/createSubSection
     ```

8. **Update Sub-Section:**
   - **Method:** POST
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/updateSubSection
     ```

9. **Delete Sub-Section:**
   - **Method:** POST
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
     ```bash
     http://localhost:3000/api/v1/course/deleteSubSection
     ```

10. **Create Category:**
    - **Method:** POST
    - **API Route:**
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Admin (using middleware `isAdmin`)
      ```bash
      http://localhost:3000/api/v1/course/createCategory
      ```

11. **Show All Categories:**
    - **Method:** GET
    - **API Route:**
      ```bash
      http://localhost:3000/api/v1/course/showAllCategories
      ```

12. **Category Page Details:**
    - **Method:** GET
    - **API Route:**
      ```bash
      http://localhost:3000/api/v1/course/categoryPageDetails
      ```

13. **Create Rating And Review:**
    - **Method:** POST
    - **API Route:**
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
      ```bash
      http://localhost:3000/api/v1/course/createRatingAndReview
      ```

14. **Update Rating And Review:**
    - **Method:** POST
    - **API Route:**
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
      ```bash
      http://localhost:3000/api/v1/course/updateRatingAndReview
      ```

15. **Delete Rating And Review:**
    - **Method:** POST
    - **API Route:**
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
      ```bash
      http://localhost:3000/api/v1/course/deleteRatingAndReview
      ```

16. **Get Average Rating:**
    - **Method:** GET
    - **API Route:**
      ```bash
      http://localhost:3000/api/v1/course/getAverageRating
      ```

17. **Get All Ratings And Reviews:**
    - **Method:** GET
    - **API Route:**
      ```bash
      http://localhost:3000/api/v1/course/getAllRatingsAndReviews
      ```

### Payment Routes

1. **Capture Payment:**
   - **Method:** POST
   - **API Route:**
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Student (using middleware `isStudent`)
     ```bash
     http://localhost:3000/api/v1/payment/capturePayment
     ```

1. **Verify Signature:**
   - **Method:** POST
   - **API Route:**
     ```bash
     http://localhost:3000/api/v1/payment/verifySignature
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
