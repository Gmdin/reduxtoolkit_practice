import { createSlice } from "@reduxjs/toolkit";


const userSclice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteUsers(state,action){}

    }
})

export default userSclice.reducer;