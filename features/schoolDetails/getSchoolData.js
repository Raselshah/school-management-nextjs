import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "test",
};

export const schoolData = createSlice({
  name: "schoolData",
  initialState,
  reducers: {
    getSchoolDetails: (state, action) => {
      console.log("hi");
    },
  },
});

export const {getSchoolDetails} = schoolData.actions;
export default schoolData.reducer;
