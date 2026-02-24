import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadById, loadMoviesByPage} from "../../../services/movies.service.ts";
import {loadMovieByName} from "../../../services/movies.search.service.ts";
import type {IForm} from "../../../models/IForm.ts";
import {loadGenres} from "../../../services/genre.service.ts";

export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async ({page, id}: { page: string, id?: string }, thunkAPI) => {

        try {
            const moviesResponse = await loadMoviesByPage(page, id)

            return thunkAPI.fulfillWithValue(moviesResponse);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadMoviesBySearch = createAsyncThunk(
    'movieSlice/loadMoviesBySearch',
    async (arg: IForm | { query: string, page: string }, thunkAPI) => {

        try {
            let movieName: string;
            let page: string = '1'

            if (typeof arg === 'object' && 'movieName' in arg) {
                movieName = arg.movieName;
            } else {
                movieName = arg.query;
                page = arg.page;
            }

            const movies = await loadMovieByName(movieName, page);

            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadMovieById = createAsyncThunk(
    'movieSlice/loadMovieById',
    async (id: string, thunkAPI) => {

        try {
            const movieById = await loadById(id)
            console.log(movieById, 'in thunk')
            return thunkAPI.fulfillWithValue(movieById);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadAllGenres = createAsyncThunk(
    'movieSlice/loadGenres',
    async (_, thunkAPI) => {

        try {
            const genres = await loadGenres()

            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
