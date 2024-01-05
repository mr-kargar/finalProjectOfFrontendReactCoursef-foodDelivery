import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      console.log(item);
      const existItem = state.find((x) => x._id === item._id);
      console.log(existItem);
      if (existItem) {
        state.map((x) => (x === existItem ? item : x));
      } else {
        state.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    changeItemQuantity: (state, action) => {
      console.log(action.payload);
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
      state = [];
    },
  },
});

export const {
  addItem: addItemAction,
  changeItemQuantity: changeItemQuantityAction,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
