import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitPayment = createAsyncThunk(
  "payment/submitPayment",
  async (payment) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/order/${payment.orderId}`,
        {
          newStatus: "confirmed",
        },
        {
          headers: {
            auth: payment.token,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: true,
    payment: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitPayment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(submitPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.payment = action.payload;
      state.error = null;
    });
    builder.addCase(submitPayment.rejected, (state, action) => {
      state.loading = false;
      state.payment = {};
      state.error = action.payload;
    });
  },
});
