import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
  
      const existItem = state.find((x) => x._id === item._id);
      
      if (existItem) {
        state.map((x) => (x === existItem ? item : x));
      } else {
        state.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    changeItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item._id === id);
      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    clearCart: (state) => {
      localStorage.removeItem("cart");
      return state = [];
    },
  },
});

export const {
  addItem: addItemAction,
  changeItemQuantity: changeItemQuantityAction,
  removeItem,
  clearCart: clearCartAction,
} = cartSlice.actions;

export default cartSlice.reducer;
