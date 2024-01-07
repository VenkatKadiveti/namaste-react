import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        updateItemCount: (state, action) => {
            state.items = state.items.map(item => {
                if(item.card.info.id === action.payload.id) {
                    action.payload.type === 'add' ? item.count++ : item.count > 0 ? item.count--: item.count; 
                }
                return item;
            });

        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart, updateItemCount } = CartSlice.actions;

export default CartSlice.reducer;