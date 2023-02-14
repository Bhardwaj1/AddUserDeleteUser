import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slice/user";

const store=configureStore({
    reducer:{
        user:UserSlice.reducer,
    },
});
export default store;