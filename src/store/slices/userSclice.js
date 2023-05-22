import { createSlice } from "@reduxjs/toolkit";


const userSclice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        deleteUsers(state,action){
           // return state=[];
           return [];
        }
        
    }
})

export const {addUser,removeUser,deleteUsers}=userSclice.actions;
export default userSclice.reducer;