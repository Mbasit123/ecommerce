import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
};
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user=action.payload.user
        }
    },
    setLogout:(state,action)=>{
        state.user=action.payload.user
    }
});
export const{
    setLogin,
    setLogout,
}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export default userSlice.reducer