import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const UserSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload);
        },
        removeUser(state,action){},
        removeAllUSer(state,action){}
    }
})
console.log()
export {UserSlice};
export const {addUser} =UserSlice.actions;
