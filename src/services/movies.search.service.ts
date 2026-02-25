import {axiosInstance} from "./api.service.ts";
import type {IMovieResponse} from "../models/movie/IMovieResponse.ts";

export const loadMovieByName = async (movieName: string,page:string='1'): Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get<IMovieResponse>('search/movie?query=' + movieName+ '&page=' + page);
    return data;
}

