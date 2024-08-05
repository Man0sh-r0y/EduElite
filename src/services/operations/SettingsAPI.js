import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { settingsEndpoints } from "../api"
import { logout } from "./AuthAPI"

const { UPDATE_DISPLAY_PICTURE_API, UPDATE_PROFILE_API, CHANGE_PASSWORD_API, DELETE_PROFILE_API } = settingsEndpoints

export async function updateDisplayPicture(token, formData) {

    const toastId = toast.loading("Loading...")

    try {
        const response = await apiConnector( "PUT", UPDATE_DISPLAY_PICTURE_API, formData, {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
        })

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Display Picture Updated Successfully")
        toast.dismiss(toastId)

        return response.data.imageURL

    } catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR:", error.message)
        toast.error("Could Not Update Display Picture")
        toast.dismiss(toastId)
        return null
    }
}

export async function updateProfile(token, formData) {

    const toastId = toast.loading("Loading...")

    try {
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
            Authorization: `Bearer ${token}`
        })

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
       
        toast.success("Profile Updated Successfully")
        toast.dismiss(toastId)

        return response.data

    } catch (error) {
        console.log("UPDATE_PROFILE_API API ERROR: ", error.message)
        toast.error("Could Not Update Profile")
        toast.dismiss(toastId)
        return null
    }
}

export async function changePassword(token, formData) {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
            Authorization: `Bearer ${token}`
        })
        console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        toast.success("Password Changed Successfully")
    } catch (error) {
        console.log("CHANGE_PASSWORD_API API ERROR: ", error.message)
        toast.error(error.response.data.message)
    }
    toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
                Authorization: `Bearer ${token}`,
            })
            console.log("DELETE_PROFILE_API API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Profile Deleted Successfully")
            dispatch(logout(navigate))
        } catch (error) {
            console.log("DELETE_PROFILE_API API ERROR............", error)
            toast.error("Could Not Delete Profile")
        }
        toast.dismiss(toastId)
    }
}