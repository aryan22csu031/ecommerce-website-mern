import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";

const initialState = {
  isLoading: false,
  featureImageList: [{img1}, {img2}, {img3}, {img4}],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `https://ecommerce-website-mern-final-backend.onrender.com/api/common/feature/get`
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `https://ecommerce-website-mern-final-backend.onrender.com/api/common/feature/add`,
      { image }
    );

    return response.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      });
  },
});

export default commonSlice.reducer;
