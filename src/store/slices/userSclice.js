import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions";

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
        // deleteAllUsers(state,action){
        //    // return state=[];
        //    return [];
        // }
        
    },
    //if action is supposed to be handled by one reducer, use reducers,
    //if action is supposed to be handled by multiple reducer, use extraReducers
    //by using extraReducer if remove the action from reducer it gives the error

    //this can be solve by createAction

    extraReducers(builder){
        builder.addCase(deleteAllUsers,()=>{
            return [];
        })
    }
})

export const {addUser,removeUser,deleteUsers}=userSclice.actions;
export default userSclice.reducer;