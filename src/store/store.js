import { configureStore } from "@reduxjs/toolkit"; 
import colorThemeSlice from "./colorThemeSlice";

export default configureStore({
    reducer: {
        darkMode: colorThemeSlice.reducer
    }
})