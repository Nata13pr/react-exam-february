import {axiosInstance} from "./api.service.ts";
import type {IGenre} from "../models/IGenre.ts";

export const loadGenres = async (): Promise<IGenre[]> => {
    const { data: { genres } } = await axiosInstance.get<{ genres: IGenre[] }>('genre/movie/list');
    return genres;
}
