import {createSlice} from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"auth",
    initialState:{
        errorMessage:"",
        successMessage:"",
        loading:"",
        userInfo:{},
        token:""
    },
    reducers:{
        resetUser(state){
            state.userInfo = {};
            state.token = "";
        }
    }
})

export const { resetUser } = authSlice.actions
export default authSlice.reducer