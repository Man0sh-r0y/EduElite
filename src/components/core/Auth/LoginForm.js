import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function LoginForm(props) {

    const navigate = useNavigate(); // useNavigate hook

    const { setIsLoggedIn } = props; // destructuring props object
    // setIsLoggedIn is used to set the value of isLoggedIn

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
        event.preventDefault(); // to prevent page refresh
        setIsLoggedIn(true); // user is logged in
        toast.success("Logged in", { position: toast.POSITION.TOP_CENTER, autoClose: 1000, theme: "colored" }); // toast message
        navigate('/dashboard'); // user will be redirected to dashboard page
    }

    return (
        <form className="flex flex-col w-full gap-y-4 mt-6"
            onSubmit={submitHandler}>
            <ToastContainer /> {/* Toast Container */}
            {/* Email Address */}
            <label className='w-full'>
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
                    className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]'
                />

            </label>

            {/* Password */}
            <label className='w-full relative'>
                {/* Password text */}
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Password
                    <sup className='text-rose-600'> * </sup>
                </p>
                {/* Password input */}
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={changeHandler}
                    name="password"
                    className='bg-slate-800 text-white rounded-[0.5rem] w-full p-[12px]'
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
                <Link to="#"> {/* Currently user will not be redirected to any page that's why '#' */}
                    <p className='text-xs mt-1 text-cyan-200 max-w-max ml-auto'>
                        Forgot Password?
                    </p>
                </Link>
            </label>

            {/* Login Button */}
            <button className='bg-amber-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign in
            </button>

        </form>
    );
}

export default LoginForm;