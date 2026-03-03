import {createSlice, type PayloadAction, type UnknownAction} from "@reduxjs/toolkit";
import type {TvShowSliceType} from "./tvShowTypes.ts";
import {loadAllTvGenres, loadTvShowById, loadTVShows} from "./tvShowThunks.ts";
import type {ITVShowResponse} from "../../../models/series/ITVShowResponse.ts";
import type {IGenre} from "../../../models/IGenre.ts";
import type {ITVShowDetails} from "../../../models/series/ITvShowDetails.ts";

const initialState: TvShowSliceType = {
    tvShows: [],
    totalPages: 1,
    page: 1,
    tvShow: null,
    genres: [],
    isLoading: false
};

export const tvShowSlice = createSlice({
    name: 'tvShowSlice',
    initialState: initialState,
    reducers: {
        clearTvShow: (state) => {
            state.tvShow = null;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadTVShows.fulfilled, (state, action: PayloadAction<ITVShowResponse>) => {
                state.tvShows = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.page = action.payload.page;
                state.isLoading = false;
            })

            .addCase(loadTvShowById.fulfilled, (state, action: PayloadAction<ITVShowDetails>) => {
                state.tvShow = action.payload;
                state.isLoading = false;
            })
            .addCase(loadAllTvGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
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

                    if (action.type.includes('loadTVShows')) {
                        state.tvShows = [];
                    }
                    if (action.type.includes('loadTvShowById')) {
                        state.tvShow = null;
                    }

                    const errorData = action.payload || action.error;
                    console.error(`Error in action ${action.type}:`, errorData);
                }
            )
});

export const tvShowSliceActions = {
    ...tvShowSlice.actions,
    loadTVShows,
    loadAllTvGenres,
    loadTvShowById
};