import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfoFetch = createAsyncThunk(
  "userInfo/fetch",
  async (token) => {
    console.log(token);
    try {
      const response = await axios.get('http://localhost:3000/user', {
        headers: {
          auth: token,
        },
      });
      console.log(response.data.data);
      return(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    loading: true,
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userInfoFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userInfoFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(userInfoFetch.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default userInfoSlice.reducer;
