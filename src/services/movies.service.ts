import {axiosInstance} from "./api.service.ts";
import type {IMovieResponse} from "../models/movie/IMovieResponse.ts";
import type {IMovieDetails} from "../models/movie/MovieDetails.ts";

export const loadMoviesByPage = async (page: string,id?:string): Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get<IMovieResponse>('discover/movie',{
        params: {
            page: page,
            with_genres: id
        }
    });
    return data;
}

export const loadById = async (id: string): Promise<IMovieDetails> => {
    const {data} = await axiosInstance.get<IMovieDetails>('movie/' + id);
    return data;
}