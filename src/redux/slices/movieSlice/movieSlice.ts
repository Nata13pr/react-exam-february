import {createSlice, type PayloadAction, type UnknownAction} from "@reduxjs/toolkit";
import type {MovieSliceType} from "./movieTypes.ts";
import {loadAllGenres, loadMovieById, loadMovies, loadMoviesBySearch} from "./movieThunks.ts";
import type {IMovieResponse} from "../../../models/movie/IMovieResponse.ts";
import type {IMovieDetails} from "../../../models/movie/IMovieDetails.ts";
import type {IGenre} from "../../../models/IGenre.ts";

const initialState: MovieSliceType = {
    movies: [],
    totalPages: 1,
    page: 1,
    searchQuery: '',
    movie: null,
    genres: [],
    isLoading: false
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },

        clearMovie: (state) => {
            state.movie = null;
        }
    },
    extraReducers: builder =>
        builder

            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.page = action.payload.page;
                state.isLoading = false;
            })
            .addCase(loadMoviesBySearch.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.isLoading = false;
            })
            .addCase(loadMovieById.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
                state.movie = action.payload;
                state.isLoading = false;
            })
            .addCase(loadAllGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genres = action.payload;
                state.isLoading = false;
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action: UnknownAction) => {
                    state.isLoading = false;

                    if (action.type.includes('loadMovies')) {
                        state.movies = [];
                    }
                    if (action.type.includes('loadMovieById')) {
                        state.movie = null;
                    }
                    const errorData = action.payload || action.error;
                    console.error(`Error in action ${action.type}:`, errorData);
                }
            )
});

export const movieSliceActions = {
    ...movieSlice.actions,
    loadMovies,
    loadMoviesBySearch,
    loadMovieById,
    loadAllGenres
};