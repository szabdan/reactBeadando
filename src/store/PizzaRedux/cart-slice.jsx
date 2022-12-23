import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        change: false
    },
    reducers: {
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.change = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    name: newItem.title,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id.id);
            state.change = true;
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        addItemsToCarts(state, action) {
            const items = action.payload.id;
            state.totalQuantity = items.totalQuantity;
        }
    
    }
});



export const cartActions = cartSlice.actions;
export default cartSlice;