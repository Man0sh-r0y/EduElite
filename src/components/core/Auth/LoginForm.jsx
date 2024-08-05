import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../../services/operations/AuthAPI";
import { useDispatch } from "react-redux"
import { useState } from 'react';
import { toast } from "react-hot-toast"

function LoginForm() {

    const navigate = useNavigate(); // useNavigate hook

    const dispatch = useDispatch(); // useDispatch hook

    const [formData, setFormData] = useState({
        email: "", // initially email is empty
        password: "" // initially password is empty
    });
    // formData is an object which contains email and password

    const [showPassword, setShowPassword] = useState(true); // initially showPassword is false
    // Initially Password is hidden
    // When I click on the eye icon, then showPassword will be true

    function passwordVisibility() {
        setShowPassword(!showPassword);
    }

    function changeHandler(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function submitHandler(event) {
        event.preventDefault()
        dispatch(login(formData.email, formData.password, navigate))
    }

    return (
        <form className="flex flex-col w-full gap-y-4 mt-6"
            onSubmit={submitHandler}>

            {/* Email Address */}
            <label className='w-full'>
                {/* Email Address text */}
                <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
                    Email Address
                    <sup className='text-pink-200'> * </sup>
                </p>
                {/* Email Address input */}
                <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className='bg-richblack-5 shadow-md rounded-[0.5rem] w-full p-[12px]'
                />

            </label>

            {/* Password */}
            <label className='w-full relative'>
                {/* Password text */}
                <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
                    Password
                    <sup className='text-pink-200'> * </sup>
                </p>
                {/* Password input */}
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={changeHandler}
                    name="password"
                    className='bg-richblack-5 shadow-md rounded-[0.5rem] w-full p-[12px]'
                />
                {/* If showPassword is true, then input type would be text,
                 That's mean whatever we are typing in the input field that would be shown
                 If showPassword is false then input type would be password,
                 That's mean whatever we are typing in the input field that would be shown */}

                {/* Eye icon */}
                <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => passwordVisibility()}>
                    {/* If I click on the eye icon, then showPassword will be true */}
                    {/* If again I click on the eye icon, then showPassword will be false */}
                    {/* It will repeteadely happen */}
                    {/* That's why setShowPassword(!showPassword) */}

                    {
                        showPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                    }
                </span>

                {/* Forgot Password */}
                <div onClick={() => navigate("/forgot-password")} > {/* Currently user will not be redirected to any page that's why '#' */}
                    <p className='text-xs mt-1 text-black max-w-max ml-auto'>
                        Forgot Password?
                    </p>
                </div>
            </label>

            {/* Login Button */}
            <button type="submit" className='bg-yellow-50 rounded-[8px] font-medium  px-[12px] py-[8px] mt-6'>
                Sign in
            </button>

        </form>
    );
}

export default LoginForm;