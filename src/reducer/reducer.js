import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice"
import cartSlice from "../slices/cartSlice"
import courseSlice from "../slices/courseSlice"
// The combineReducers function allows you 
// to combine multiple reducer functions into a single function 
// that can be passed to the Redux store

const rootReducer = combineReducers({
    auth: authSlice,
    profile: profileSlice,
    cart: cartSlice
})

export default rootReducer