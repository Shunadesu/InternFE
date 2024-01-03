import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    item: [],
    status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id= null, { rejectWithValue }) => {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (!response.success) return rejectWithValue(response);
      return response?.data;
    }
  );
  

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})

export default productSlice.reducer