import type {IMovie} from "../../../models/movie/IMovie.ts";
import type {IMovieSearch} from "../../../models/movie/IMovieSearch.ts";
import type {IMovieDetails} from "../../../models/movie/MovieDetails.ts";
import type {IGenre} from "../../../models/IGenre.ts";

export type MovieSliceType = {
    movies: IMovie[];
    totalPages: number;
    page: number;
    moviesSearch: IMovieSearch[];
    moviesSearchTotalPages: number;
    searchQuery: string;
    movie: IMovie | IMovieDetails | null;
    genres: IGenre[];
}
