import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState:{carIsVisible: false, notification: null},
    reducers:{
        toggle(state){
            state.carIsVisible = !state.carIsVisible;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                name: action.payload.name,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;