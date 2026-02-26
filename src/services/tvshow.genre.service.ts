import {axiosInstance} from "./api.service.ts";
import type {IGenre} from "../models/IGenre.ts";

export const loadTvGenres = async (): Promise<IGenre[]> => {
    const { data: { genres } } = await axiosInstance.get<{ genres: IGenre[] }>('genre/tv/list');
    return genres;
}
