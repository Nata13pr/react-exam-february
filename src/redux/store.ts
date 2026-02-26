import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice/movieSlice.ts";
import {tvShowSlice} from "./slices/tvShowSlice/tvShowSlice.ts";


export const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        tvShowSlice: tvShowSlice.reducer,
    }
})