import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {

            const item = action.payload;
            console.log(item);
            const existItem = state.find(x => x._id === item._id);
            console.log(existItem);
            if (existItem) {
                state.map(x => x === existItem ? item : x);
            } else{
                state.push(item);
            }
           
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        clearCart: state => {
            state = [];
        },
    },
});

export const { addItem: addItemAction, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
