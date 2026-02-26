import type {IBaseResponse} from "../IBaseResponse.ts";
import type {ITVShow} from "./ITVShow.ts";


export interface ITVShowResponse extends IBaseResponse {
    results: ITVShow[];
}