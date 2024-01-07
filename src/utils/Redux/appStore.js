import { configureStore } from "@reduxjs/toolkit"
import CartReducer from './cartSlice';
import CartValueReducer from './cartValueSlice';

const appStore = configureStore({
    reducer: {
        cart: CartReducer,
        cartValue: CartValueReducer
    }
});

export default appStore;