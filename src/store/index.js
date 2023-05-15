import { configureStore } from "@reduxjs/toolkit";
import userSclice from './slices/userSclice';


const store=configureStore({
    reducer:{
        users:userSclice,
    }
})

export default store;