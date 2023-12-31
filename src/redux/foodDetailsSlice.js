import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const foodDetailsFetch = createAsyncThunk('foodDetails/fetch', async (data) => {
    try {
        const foodDetailsData = await axios.get(`http://localhost:3000/menu/${data.id}`, {
            headers: {
                auth: data.token,
            },
        });
        return foodDetailsData.data;
    } catch (error) {
        console.error(error.message);
    }
});


const foodDetailsSlice = createSlice({
    name: 'foodDetails',
    initialState: {
        loading: false,
        foodDetails: [],
        error : null,
        },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(foodDetailsFetch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(foodDetailsFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.foodDetails = action.payload;
            state.error = null;
        });
        builder.addCase(foodDetailsFetch.rejected, (state, action) => {
            state.loading = false;
            state.foodDetails = [];
            state.error = action.payload;
        });
    }

    });

    export default foodDetailsSlice.reducer;
