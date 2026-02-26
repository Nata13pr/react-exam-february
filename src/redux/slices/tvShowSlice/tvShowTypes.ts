import type {ITVShow} from "../../../models/series/ITVShow.ts";
import type {IGenre} from "../../../models/IGenre.ts";
import type {ITVShowDetails} from "../../../models/series/ITvShowDetails.ts";


export type TvShowSliceType = {
    tvShows: ITVShow[];
    totalPages: number;
    page: number;
    // searchQuery: string;
    tvShow:  ITVShowDetails | null;
    genres: IGenre[];
    isLoading: boolean;
}
