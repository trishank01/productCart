import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/ProductData.json";

const initialState = {
  data : data,
  brand: [],
  size : [],
  ideal: "",
  clearFilter : []
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SET_BRAND_DATA : (state , actions) => {
       state.data = actions.payload
    },
    BRAND_CHECKBOX_VALUE : (state, actions) => {
      const { value, checked } = actions.payload;
      if (checked) {
        state.brand.push(value);
      }
      else {
        const filtered = state.brand.filter((item) => item !== value);
        state.brand = filtered;
      }
    },
    SIZE_CHECKBOX_VALUE : (state, actions) => {
      const { value, checked } = actions.payload;
      if (checked) {
        state.size.push(value);
      }else {
        const filtered = state.size.filter((item) => item !== value);
        state.size = filtered;
      }
    },
    GENDER_VALUE : (state, actions) => {
      state.ideal = actions.payload
  
    },
    CLEAR_FILTER : (state, actions) => {
      state.clearFilter = actions.payload
      state.brand = []
      state.size = []
      state.ideal = ""
  
    },
  },
});

export const {BRAND_CHECKBOX_VALUE ,SIZE_CHECKBOX_VALUE , GENDER_VALUE , CLEAR_FILTER , SET_BRAND_DATA} = filterSlice.actions;

export default filterSlice.reducer;
