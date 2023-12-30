import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchFetch = createAsyncThunk("search/fetch", async (data) => {
  console.log("in search data ", data);
  try {
    const searchData = await axios.get(
      `http://localhost:3000/search/menu?name=${data.name}`,
      {
        headers: {
          auth: data.token,
        },
      }
    );
    console.log(" in search slice   ", searchData);
    return searchData.data;
  } catch (error) {
    console.error(error.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    search: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.search = action.payload;
      state.error = null;
    });
    builder.addCase(searchFetch.rejected, (state, action) => {
      state.loading = false;
      state.search = [];
      state.error = action.payload;
    });
  },
});

export default searchSlice.reducer;
