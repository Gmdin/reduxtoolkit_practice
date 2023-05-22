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
        
    },
    //if action is supposed to be handled by one reducer, use reducers,
    //if action is supposed to be handled by multiple reducer, use extraReducers
    extraReducers(builder){
        builder.addCase(userSclice.actions.deleteUsers,()=>{
            return [];
        })
    }
})

export const {addUser,removeUser,deleteUsers}=userSclice.actions;
export default userSclice.reducer;