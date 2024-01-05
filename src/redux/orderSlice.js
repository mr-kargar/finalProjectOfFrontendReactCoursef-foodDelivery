import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrder = createAsyncThunk(
  "payment/submitOrder",
  async (order) => {
    
    const orderTemp = {orderItems: order.order.orderItems};
    console.log(orderTemp);
    console.log(order.order.token);

    try {
      const response = await axios.post(
        "http://localhost:3000/order",orderTemp,
        {
          headers: {
            
            auth: order.order.token,
          },
        }
      );
      console.log(response);
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
