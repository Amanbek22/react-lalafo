import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const fetchCars = createAsyncThunk("cars/setHouses", async () => {
  const res = await Api.getCars();
  return res.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    isLoading: true,
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export const carsSliceAction = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;
