import type {IBaseResponse} from "./IBaseResponse.ts";
import type {IMovieSearch} from "./IMovieSearch.ts";

export interface IMovieSearchResponse extends IBaseResponse {
    results: IMovieSearch[];
}

