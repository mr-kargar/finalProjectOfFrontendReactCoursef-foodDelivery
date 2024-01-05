import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/sign-in",
      userData
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: true,
    user: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
