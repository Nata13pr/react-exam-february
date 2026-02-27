import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadTvById, loadTVShowsByPage} from "../../../services/tvshow.service.ts";
import {loadTvGenres} from "../../../services/tvshow.genre.service.ts";

export const loadTVShows = createAsyncThunk(
    'tvShowSlice/loadTVShows',
    async ({page, id}: { page: string, id?: string }, thunkAPI) => {

        try {
            const tvShowResponse = await loadTVShowsByPage(page, id)

            return thunkAPI.fulfillWithValue(tvShowResponse);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const loadTvShowById = createAsyncThunk(
    'tvShowSlice/loadTvById',
    async (id: string, thunkAPI) => {

        try {
            const tvById = await loadTvById(id)

            return thunkAPI.fulfillWithValue(tvById);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const loadAllTvGenres = createAsyncThunk(
    'tvShowSlice/loadGenres',
    async (_, thunkAPI) => {

        try {
            const genres = await loadTvGenres()

            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)
