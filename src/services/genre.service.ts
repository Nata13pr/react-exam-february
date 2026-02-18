import {axiosInstance} from "./api.service.ts";
import type {IGenre} from "../models/IGenre.ts";
import type {IMovieResponse} from "../models/movie/IMovieResponse.ts";

export const loadGenres = async (): Promise<IGenre[]> => {
    const {data} = await axiosInstance.get<IGenre[]>('genre/movie/list');
    return data;
}

export const loadMoviesByGenderId = async (id: string, page: string = '1'): Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get<IMovieResponse>('discover/movie?with_genres=' + id + '&page=' + page);
    return data;
}