import {axiosInstance} from "./api.service.ts";
import type {IMovieSearchResponse} from "../models/movie/IMovieSearchResponse.ts";

export const loadMovieByName = async (movieName: string,page:string='1'): Promise<IMovieSearchResponse> => {
    const {data} = await axiosInstance.get<IMovieSearchResponse>('search/keyword?query=' + movieName+ '&page=' + page);
    return data;
}