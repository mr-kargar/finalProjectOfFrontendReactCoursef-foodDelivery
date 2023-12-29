import {
  createSlice,
  asyncThunkCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const foodFetch = createAsyncThunk("food/fetch", async (data) => {
  try {
    const foodData = await axios.get(
      `http://localhost:3000/menu/?type=${data.type}`,
      {
        headers: {
          auth: data.token,
        },
      }
    );
    console.log(" in slice  " , foodData);
    return foodData.data;
  } catch (error) {
    console.error(error.message);
  }
});

const foodSlice = createSlice({
  name: "food",
  initialState: {
    loading: true,
    foods: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(foodFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(foodFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = null;
      
    });
    builder.addCase(foodFetch.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.payload;
    });
  },
});

export default foodSlice.reducer;
