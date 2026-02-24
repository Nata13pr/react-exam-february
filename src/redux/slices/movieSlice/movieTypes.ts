import type {IMovie} from "../../../models/movie/IMovie.ts";
import type {IMovieDetails} from "../../../models/movie/MovieDetails.ts";
import type {IGenre} from "../../../models/IGenre.ts";

export type MovieSliceType = {
    movies: IMovie[];
    totalPages: number;
    page: number;
    searchQuery: string;
    movie:  IMovieDetails | null;
    genres: IGenre[];
}
