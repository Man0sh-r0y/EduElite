import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
// The combineReducers function allows you 
// to combine multiple reducer functions into a single function 
// that can be passed to the Redux store

const rootReducer = combineReducers({
    auth: authSlice
})

export default rootReducer