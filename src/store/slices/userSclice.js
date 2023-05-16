import { createSlice } from "@reduxjs/toolkit";


const userSclice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){},
        deleteUsers(state,action){}

    }
})

export const {addUser}=userSclice.actions;
export default userSclice.reducer;