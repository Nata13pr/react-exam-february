import "./MovieListComponent.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import {type FC} from "react";
import MovieListCardComponent from "../movie-list-card-component/MovieListCardComponent.tsx";

type MovieListProps = {
    movies: IMovie[];
    genresMap?: {[key: number]: string}
}
const MovieListComponent: FC<MovieListProps> = ({movies,genresMap}) => {

    return (
        <ul className='movie-list'>
            {
                movies.map(movie => <MovieListCardComponent key={movie.id} movie={movie} genresMap={genresMap}/>)
            }
        </ul>
    )
}
export default MovieListComponent;