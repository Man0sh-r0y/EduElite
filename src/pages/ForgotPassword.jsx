import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ScreenLoader from "../components/common/ScreenLoader"

import { getPasswordResetToken } from "../services/operations/AuthAPI"

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch()

    const { loading } = useSelector((state) => state.auth)

    async function handleOnSubmit(event) {

        event.preventDefault()

        try {
            await getPasswordResetToken(email, setEmailSent, dispatch)

        } catch (error) {
            console.log("Error occurred while sending forgot password mail: ", error.message)
        }
    }

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

            <div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">
                    {!emailSent ? "Reset your password" : "Check email"}
                </h1>
                <p className="my-4 text-[1.125rem] leading-[1.625rem]">
                    {!emailSent
                        ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                        : `We have sent the reset email to ${email}`}
                </p>

                <form onSubmit={handleOnSubmit}>
                    {!emailSent && (
                        <label className="w-full">
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
                                Email Address <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email Address.."
                                className="form-style w-full bg-richblack-5 py-[12px] px-[12px] rounded-[8px]"
                            />
                        </label>
                    )}
                    <button type="submit" className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium">
                        {!emailSent ? "Sumbit" : "Resend Email"}
                    </button>
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link to="/login">
                        <p className="flex items-center gap-x-2">
                            <BiArrowBack /> Back To Login
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword