import { configureStore, createReducer } from "@reduxjs/toolkit";
import  userReducer  from "../Slice.js";
import cartReducer from "../ProductSlice.js"


export const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer,
    }

})
export default store