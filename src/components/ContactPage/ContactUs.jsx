import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { apiConnector } from '../../services/apiConnector';
import { contactusEndpoint } from '../../services/api';
import CountryCode from "../../data/countrycode.json"
import toast from 'react-hot-toast';

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const submitContactForm = async (data) => {

        console.log("Logging Data", data);

        try {
            setLoading(true);

            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);

            if (response.data.success)
                toast.success("Message Sent Successfully!");

            setLoading(false);
        }
        catch (error) {
            console.log("Error:", error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                contactNo: "",
            })
        }
    }, [reset, isSubmitSuccessful]);


    return (
        <div>


            <form onSubmit={handleSubmit(submitContactForm)}>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-5'>
                        {/* firstName */}
                        <div className='flex flex-col'>
                            <label htmlFor='firstname'>First Name</label>
                            <input
                                type='text'
                                name='firstname'
                                id='firstname'
                                placeholder='Enter first name'
                                className='bg-richblack-5 shadow-md p-3'
                                {...register("firstName", { required: true })}
                            />
                            {
                                errors.firstName && (
                                    <span className='text-pink-300'>
                                        Please enter Your name
                                    </span>
                                )
                            }
                        </div>

                        {/* lastName */}
                        <div className='flex flex-col'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input
                                type='text'
                                name='lastname'
                                id='lastname'
                                className='bg-richblack-5 shadow-md p-3'
                                placeholder='Enter Last name'
                                {...register("lastName")}
                            />

                        </div>

                    </div>


                    {/* email */}
                    <div className='flex flex-col'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='bg-richblack-5 shadow-md p-3'
                            placeholder='Enter email Address'
                            {...register("email", { required: true })}
                        />
                        {
                            errors.email && (
                                <span className='text-pink-300'>
                                    Please enter your email address
                                </span>
                            )
                        }
                    </div>

                    {/* phoneNo */}
                    <div className='flex flex-col'>

                        <label htmlFor='phonenumber'>Phone Number</label>

                        <div className='flex flex-row gap-1'>
                            {/* dropdown */}

                            <select
                                name='dropdown'
                                id="dropdown"
                                className='bg-richblack-5 shadow-md w-[50px]'
                                defaultValue={CountryCode[74].code}
                                {...register("countryCode", { required: true })}
                            >
                                {
                                    CountryCode.map((element, index) => {
                                        return (
                                            <option key={index} value={element.code}>
                                                {element.code} - {element.country}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                            <input
                                type='number'
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12345 67890'
                                className='bg-richblack-5 shadow-md p-3  w-[calc(100%-50px)]'
                                {...register("contactNo",
                                    {
                                        required: { value: true, message: "Please enter Phone Number" },
                                        maxLength: { value: 10, message: "Invalid Phone Number" },
                                        minLength: { value: 8, message: "Invalid Phone Number" }
                                    })}
                            />

                        </div>
                        {
                            errors.contactNo && (
                                <span className='text-pink-300'>
                                    {errors.contactNo.message}
                                </span>
                            )
                        }

                    </div>

                    {/* message */}
                    <div className='flex flex-col'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            cols="30"
                            className='bg-richblack-5 shadow-md p-3'
                            rows="7"
                            placeholder='Enter Your message here'
                            {...register("message", { required: true })}
                        />
                        {
                            errors.message && (
                                <span className='text-pink-300'>
                                    PLease enter your message.
                                </span>
                            )
                        }
                    </div>

                    <button type='submit'
                        className='rounded-md bg-yellow-50 text-center p-2 text-[16px] font-bold '>
                        {
                            loading ? "Sending..." : "Send Message"
                        }
                    </button>
                </div>

            </form>


        </div>
    )
}

export default ContactUsForm