import { configureStore } from "@reduxjs/toolkit";
import userSclice from "./userSclice";


const store=configureStore({
    reducer:{
        users:userSclice,
    }
})

export default store;