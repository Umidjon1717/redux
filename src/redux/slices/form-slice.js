import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice({
    name:"form",
    initialState: {
        firstname: "",
        lastname: "",
        age: "",
        profession: "",
        gender: "",
    },
    reducers:{
        AddForm(state, action) {
            return { ...state, ...action.payload };
        }        
    }
})



export const {AddForm}=formSlice.actions
export default formSlice.reducer
