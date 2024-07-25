import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
  totalAmount: localStorage.getItem("totalAmount") ? JSON.parse(localStorage.getItem("total")) : 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {

    addToCart: (state, action) => {

      const course = action.payload
      const index = state.cart.findIndex((item) => item._id === course._id)

      if (index >= 0) {
        // If the course is already in the cart, do not modify the quantity
        toast.error("Course already in cart")
        return
      }
      // If the course is not in the cart, add it to the cart
      state.cart.push(course)
      // Update the total quantity and price
      state.totalItems++
      state.totalAmount += course.price
      // Update to localstorage
      localStorage.setItem("cart", JSON.stringify(state.cart))
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
      // show toast
      toast.success("Course added to cart")
    },

    removeFromCart: (state, action) => {

      const courseId = action.payload
      const index = state.cart.findIndex((item) => item._id === courseId)

      if (index >= 0) {
        // If the course is found in the cart, remove it
        state.totalItems--
        state.totalAmount -= state.cart[index].price
        state.cart.splice(index, 1) // remove 1 element from the mentioned index
        // Update to localstorage
        localStorage.setItem("cart", JSON.stringify(state.cart))
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        // show toast
        toast.success("Course removed from cart")
      }
    },

    resetCart: (state) => {

      state.cart = []
      state.totalAmount = 0
      state.totalItems = 0

      // Update to localstorage
      localStorage.removeItem("cart")
      localStorage.removeItem("totalAmount")
      localStorage.removeItem("totalItems")
    }
  }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer