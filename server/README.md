# Backend

## Backend API Testing

### User Routes

1. **Send OTP:**
   - **Method**: POST
   - **API Route:**
  
    ```bash
      http://localhost:4000/api/v1/auth/sendotp
    ```

    ```json
    {
      "email":"fimowi9945@glumark.com"
    }
    ```

2. **Sign Up:**
   - **Method:** POST
   - **API Route:**

     ```bash
      http://localhost:4000/api/v1/auth/signup
     ```

    ```json
    {
      "firstName":"Manash",
      "lastName":"Roy",
      "password":"123456",
      "confirmPassword":"123456",
      "email":"testmail@gmail.com",
      "accountType":"Student",
      "otp":"yiSxph"
    }
    ```

3. **Login:**
   - **Method:** POST
   - **API Route:**
  
     ```bash
      http://localhost:4000/api/v1/auth/login
     ```

4. **Change Password:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
      http://localhost:4000/api/v1/auth/changePassword
     ```

5. **Generate Forgot Password Token:**
   - **Method:** POST
   - **API Route:**
  
     ```bash
      http://localhost:4000/api/v1/auth/forgotPasswordToken
     ```

6. **Reset Forgot Password:**
   - **Method:** POST
   - **API Route:**
  
     ```bash
      http://localhost:4000/api/v1/auth/resetForgotPassword
     ```

### User's Profile Routes

1. **Update Profile:**
   - **Method:** PUT
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/updateProfile
     ```

2. **Delete Account:**
   - **Method:** DELETE
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/deleteAccount
     ```

3. **Cancel Delete Account:**
   - **Method:** PUT
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/cancelDeleteAccount
     ```

4. **Get All Details Of User:**
   - **Method:** GET
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/getAllDetailsOfUser
     ```

5. **Update Display Picture:**
   - **Method:** PUT
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/updateDisplayPicture
     ```

6. **Get Enrolled Courses:**
   - **Method:** GET
   - **Authentication Required:** Yes (using middleware `auth`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/profile/getEnrolledCourses
     ```

### Course Routes

1. **Create Course:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/createCourse
     ```

2. **Show All Courses:**
   - **Method:** GET
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/showAllCourses
     ```

3. **Get Course Details:**
   - **Method:** GET
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/getCourseDetails
     ```

4. **Create Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/createSection
     ```

5. **Update Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/updateSection
     ```

6. **Delete Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/deleteSection
     ```

7. **Create Sub-Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/createSubSection
     ```

8. **Update Sub-Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/updateSubSection
     ```

9. **Delete Sub-Section:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Instructor (using middleware `isInstructor`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/course/deleteSubSection
     ```

10. **Create Category:**
    - **Method:** POST
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Admin (using middleware `isAdmin`)
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/createCategory
      ```

11. **Show All Categories:**
    - **Method:** GET
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/showAllCategories
      ```

12. **Category Page Details:**
    - **Method:** GET
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/categoryPageDetails
      ```

13. **Create Rating And Review:**
    - **Method:** POST
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/createRatingAndReview
      ```

14. **Update Rating And Review:**
    - **Method:** POST
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/updateRatingAndReview
      ```

15. **Delete Rating And Review:**
    - **Method:** POST
    - **Authentication Required:** Yes (using middleware `auth`)
    - **Role Required:** Student (using middleware `isStudent`)
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/deleteRatingAndReview
      ```

16. **Get Average Rating:**
    - **Method:** GET
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/getAverageRating
      ```

17. **Get All Ratings And Reviews:**
    - **Method:** GET
    - **API Route:**
  
      ```bash
      http://localhost:4000/api/v1/course/getAllRatingsAndReviews
      ```

### Payment Routes

1. **Capture Payment:**
   - **Method:** POST
   - **Authentication Required:** Yes (using middleware `auth`)
   - **Role Required:** Student (using middleware `isStudent`)
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/payment/capturePayment
     ```

2. **Verify Signature:**
   - **Method:** POST
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/payment/verifySignature
     ```

### Contact Us Route

1. **Contact Us:**
   - **Method:** POST
   - **API Route:**
  
     ```bash
     http://localhost:4000/api/v1/contactUs
     ```
