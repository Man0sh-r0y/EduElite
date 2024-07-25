import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { sendOtp } from "../../../services/operations/AuthAPI"
import { setSignUpData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

function SignupForm() {

    const navigate = useNavigate(); // useNavigate hook
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        firstName: "", // initially first name is empty
        lastName: "", // initially last name is empty
        email: "", // initially email is empty
        password: "", // initially password is empty
        confirmPassword: "", // initially confirmPassword is empty
    });

    const [showPassword, setShowPassword] = useState(false); // initially showPassword is false
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // initially showConfirmPassword is false
    const [accountType, setAccountType] = useState("student"); // initially accountType is student
    // There are two types of accounts: student and instructor


    function changeHandler(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function submitHandler(event) {
        event.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }

        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignUpData(signupData))
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email, navigate))

        // Reset
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setAccountType(ACCOUNT_TYPE.STUDENT)
    }

    return (
        <div>
            
            {/* Student and Instructor tab */}
            <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? "bg-black text-white" : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType === "instructor" ? "bg-black text-white" : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First Name and Last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        {/* First Name text */}
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            First Name
                            <sup className='text-rose-600'> * </sup>
                        </p>
                        {/* First Name input */}
                        <input
                            required
                            type="text"
                            placeholder="Enter your first name"
                            onChange={changeHandler}
                            name="firstName"
                            className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]' />
                    </label>

                    <label className='w-full'>
                        {/* Last Name text */}
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Last Name
                            <sup className='text-rose-600'> * </sup>
                        </p>
                        {/* Last Name input */}
                        <input
                            required
                            type="text"
                            placeholder="Enter your last name"
                            onChange={changeHandler}
                            name="lastName"
                            className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]' />
                    </label>
                </div>

                {/* Email Address */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        {/* Email Address text */}
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Email Address
                            <sup className='text-rose-600'> * </sup>
                        </p>
                        {/* Email Address input */}
                        <input
                            required
                            type="email"
                            placeholder="Enter your email address"
                            onChange={changeHandler}
                            name="email"
                            className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]' />
                    </label>
                </div>

                {/* Create Password and Confirm Password */}
                <div className='w-full flex gap-x-4 mt-[20px]'>
                    {/* Create Password */}
                    <label className='w-full relative'>
                        {/* Create Password text */}
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Create Password
                            <sup className='text-rose-600'> * </sup>
                        </p>
                        {/* Create Password input */}
                        <input
                            required
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            onChange={changeHandler}
                            className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]'
                        />

                        {/* Show Password icon */}
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?

                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>

                    {/* Confirm Password */}
                    <label className='w-full relative'>
                        {/* Confirm Password text */}
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Confirm Password
                            <sup className='text-rose-600'> * </sup>
                        </p>
                        {/* Confirm Password input */}
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            onChange={changeHandler}
                            name="confirmPassword"
                            className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]' />

                        {/* Show Password icon */}
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {
                                showConfirmPassword ?

                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>

                </div>

                {/* Sign Up button */}
                <button className=' w-full bg-amber-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>

        </div>
    );

}

export default SignupForm;