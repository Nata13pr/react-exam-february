import "./MovieListComponent.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import MovieListCardComponent from "../movie-list-card-component/MovieListCardComponent.tsx";

type MovieListProps = {
    movies: IMovie[];
}
const MovieListComponent: FC<MovieListProps> = ({movies}) => {

    return (
        <ul className='movie-list'>
            {
                movies.map(movie => <MovieListCardComponent key={movie.id} movie={movie}/>)
            }
        </ul>
    )
}
export default MovieListComponent;