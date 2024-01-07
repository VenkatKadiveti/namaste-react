import { createSlice } from "@reduxjs/toolkit";

const cartValueSlice = createSlice({
    name: 'CartValue',
    initialState: {
        value: 0
    },
    reducers: {
        increaseCartValue: (state, action) =>{
            let val = ((action.payload.card.info.price || action.payload.card.info.defaultPrice) / 100)
           state.value = state.value + val;
        },
        decreaseCartValue: (state, action) =>{
            let val = ((action.payload.card.info.price || action.payload.card.info.defaultPrice) / 100)
           state.value = state.value - val;
        },
        resetValue: (state, action) =>{
            state.value = 0;
        }
    }
});

export const { increaseCartValue, decreaseCartValue, resetValue } = cartValueSlice.actions;

export default cartValueSlice.reducer;