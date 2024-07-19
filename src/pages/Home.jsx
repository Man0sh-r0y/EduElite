import React from 'react'
import { Link } from "react-router-dom"
import Banner from "../assets/Images/banner.mp4"
import HighlightText from '../components/core/HomePage/HighlightText'
import CustomButton from '../components/core/HomePage/Button'
import StudentImage from '../assets/homepage-img-showcase.jpg'


function Home() {
    return (
        <div>
            {/* section 1 */}
            {/* relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between */}
            <div className='text-white'>

                <Link to={"/signup"}>
                    <div className='group bg-richblack-800 mt-16 p-1 mx-auto rounded-full transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row gap-2 items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                        </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower your Future With
                    <HighlightText text={"Coding Skills"} />
                </div>

                <div className=' mt-4 w-[75%] mx-auto text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8 justify-center'>
                    <CustomButton active={true} linkto={"/signup"}>
                        Learn More
                    </CustomButton>

                    <CustomButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CustomButton>
                </div>

                <div className='w-[75%] mx-auto mt-16'>
                    <img src={StudentImage} />
                </div>

            </div>


            {/* Code section 1 */}

            {/* Code section 2 */}



        </div>
    )
}

export default Home