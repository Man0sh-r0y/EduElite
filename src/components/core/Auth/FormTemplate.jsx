import frameImage from "../../../assets/Images/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc"

function Template(props) {

    const { title, description1, description2, image, formType } = props;

    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                {/* Title */}
                <h1 className='text-pink-500 font-semibold text-[1.875rem] leading-[2.375rem]' >
                    {title}
                </h1>

                {/* Description */}
                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    {/* Description text */}
                    <div className='text-blue-200'>
                        {description1}
                    </div>
                    <div className='italic'>
                        {description2}
                    </div>
                </p>

                {
                    formType === "signup" ?
                        (<SignupForm />) :
                        (<LoginForm />)
                }
                {/* if Form Type is sign up then show the sign up form otherwise show the login form */}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    {/* A Line made with div tag */}
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-slate-200 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    {/* A Line made with div tag */}
                    <div className='w-full h-[1px] bg-black'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-200 border border-slate-400 px-[12px] py-[8px] gap-x-2 mt-6 '>
                    {/* Google Icon */}
                    <FcGoogle />
                    <span>Sign Up with Google</span>
                </button>

            </div>

            <div className='relative w-11/12 max-w-[450px] '>
                {/* Frame Image */}
                <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy" />

                {/* Students Image */}
                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className='absolute -top-4 right-4'
                />
            </div>

        </div>
    );
}

export default Template;