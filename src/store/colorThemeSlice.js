import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const colorThemeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const colorThemeActions = colorThemeSlice.actions

export default colorThemeSlice