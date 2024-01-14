import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const foodDetailsFetch = createAsyncThunk('foodDetails/fetch', async (data) => {
    try {
        const foodDetailsData = await axios.get(`http://localhost:3000/search/menu?name=${data.name}`, {
            headers: {
                auth: data.token,
            },
        });
        console.log("food details slice ;" , foodDetailsData);
        return foodDetailsData.data;
    } catch (error) {
        console.error(error.message);
    }
});


const foodDetailsSlice = createSlice({
    name: 'foodDetails',
    initialState: {
        loading: false,
        foodDetail: [],
        error : null,
        },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(foodDetailsFetch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(foodDetailsFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.foodDetail = action.payload;
            state.error = null;
            
        });
        builder.addCase(foodDetailsFetch.rejected, (state, action) => {
            state.loading = false;
            state.foodDetail = [];
            state.error = action.payload;
        });
    }

    });

    export default foodDetailsSlice.reducer;
