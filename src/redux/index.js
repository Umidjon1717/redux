import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter-slice'
import formSlice from './slices/form-slice'

const store =configureStore({
    reducer:{
        counter:counterSlice,
        form:formSlice
    }
})

export default store