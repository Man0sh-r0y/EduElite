import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { authEndpoints } from "../api"

const { SENDOTP_API, SIGNUP_API, LOGIN_API, RESETPASSTOKEN_API, RESETPASSWORD_API } = authEndpoints

// SEND OTP Function:
// 1. Toast ID will be generated
// 2. Loading will be set to true
// 3. API call will be made to send OTP
// 4. Id successfull, then navigate to Verify Email page

export function sendOtp(email, navigate) {

    return async (dispatch) => {

        const toastId = toast.loading("Loading...")

        dispatch(setLoading(true))

        try {
            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                checkUserPresent: true,
            })
            // console.log("SENDOTP API RESPONSE............", response)

            // console.log(response.data.success)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("OTP Sent Successfully")

            navigate("/verify-email")

        } catch (error) {
            console.log("SENDOTP API ERROR............", error)
            toast.error("Could Not Send OTP")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate) {

    return async (dispatch) => {

        const toastId = toast.loading("Loading...")

        dispatch(setLoading(true))

        try {
            const response = await apiConnector("POST", authEndpoints.SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
            })

            // console.log("SIGNUP API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Signup Successful")

            navigate("/login")

        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/signup")
        }

        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function login(email, password, navigate) {

    return async (dispatch) => {

        const toastId = toast.loading("Loading...")

        dispatch(setLoading(true))

        try {
            const response = await apiConnector("POST", authEndpoints.LOGIN_API, {
                email,
                password
            })

            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successful")
            dispatch(setToken(response.data.token))

            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

            dispatch(setUser({ ...response.data.user, additionalDetails: response.data.additionalDetails, image: userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))

            navigate("/dashboard")

        } catch (error) {
            toast.error(error.response.data.message)
        }

        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export async function getPasswordResetToken(email, setEmailSent, dispatch) {

    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))

    try {
        const response = await apiConnector("POST", RESETPASSTOKEN_API, {
            email
        })

        // console.log("RESETPASSTOKEN RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Reset Email Sent")

        setEmailSent(true)

    } catch (error) {
        console.log("RESETPASSTOKEN ERROR............", error)
        toast.error("Failed To Send Reset Email")
    }

    toast.dismiss(toastId)

    dispatch(setLoading(false))
}

export async function resetPassword(password, confirmPassword, token, navigate, dispatch) {

    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))

    try {
        const response = await apiConnector("POST", RESETPASSWORD_API, {
            password,
            confirmPassword,
            token
        })

        console.log("RESETPASSWORD RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Password Reset Successfully")

        navigate("/login")

    } catch (error) {
        console.log("RESETPASSWORD ERROR: ", error.message)
        toast.error("Failed To Reset Password")
    }

    toast.dismiss(toastId)

    dispatch(setLoading(false))
}

export function logout(navigate) {

    return (dispatch) => {

        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}