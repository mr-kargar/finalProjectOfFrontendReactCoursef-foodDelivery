import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("orders/fetch" ,async (token) => {
    try {
        const ordersData = await axios.get(
            `http://localhost:3000/orders`,
            {
                headers: {
                    auth: token,
                },
            }
        );
        
        return ordersData.data;
    } catch (error) {
        console.error(error.message);
    }

});

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        loading: true,
        orders: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload;
            state.error = null;
        });
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false;
            state.orders = [];
            state.error = action.payload;
        });
    },
});

export default ordersSlice.reducer;