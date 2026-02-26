import type {IBaseResponse} from "../IBaseResponse.ts";
import type {IMovie} from "./IMovie.ts";

export interface IMovieResponse extends IBaseResponse {
    results: IMovie[];
}