import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrder = createAsyncThunk(
  "payment/submitOrder",
  async (order) => {
    
    const orderTemp = {orderItems: order.order.orderItems};
    

    try {
      const response = await axios.post(
        "http://localhost:3000/order",orderTemp,
        {
          headers: {
            
            auth: order.order.token,
          },
        }
      );
     
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: true,
    order: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(submitOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.error = null;
    });
    builder.addCase(submitOrder.rejected, (state, action) => {
      state.loading = false;
      state.order = {};
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
