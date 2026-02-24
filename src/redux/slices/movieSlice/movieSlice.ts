import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieSliceType} from "./movieTypes.ts";
import {loadAllGenres, loadMovieById, loadMovies, loadMoviesBySearch} from "./movieThunks.ts";
import type {IMovieResponse} from "../../../models/movie/IMovieResponse.ts";
import type {IMovieDetails} from "../../../models/movie/MovieDetails.ts";
import type {IGenre} from "../../../models/IGenre.ts";

const initialState: MovieSliceType = {
    movies: [],
    totalPages: 1,
    page: 1,
    searchQuery: '',
    movie: null,
    genres: []
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
                state.page = action.payload.page
            })
            .addCase(loadMovies.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })
            .addCase(loadMoviesBySearch.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })
            .addCase(loadMoviesBySearch.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })
            .addCase(loadMovieById.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
                state.movie = action.payload
            })
            .addCase(loadMovieById.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })
            .addCase(loadAllGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genres = action.payload
            })
            .addCase(loadAllGenres.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })

})

export const movieSliceActions = {
    ...movieSlice.actions, loadMovies, loadMoviesBySearch, loadMovieById, loadAllGenres
}