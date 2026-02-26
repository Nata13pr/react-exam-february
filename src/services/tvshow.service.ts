import {axiosInstance} from "./api.service.ts";
import type {ITVShowResponse} from "../models/series/ITVShowResponse.ts";
import type {ITVShowDetails} from "../models/series/ITvShowDetails.ts";

export const loadTVShowsByPage = async (page: string,id?:string): Promise<ITVShowResponse> => {
    const {data} = await axiosInstance.get<ITVShowResponse>('discover/tv',{
        params: {
            page: page,
            with_genres: id
        }
    });
    return data;
}

export const loadTvById = async (id: string): Promise<ITVShowDetails> => {
    const {data} = await axiosInstance.get<ITVShowDetails>('tv/' + id);
    return data;
}