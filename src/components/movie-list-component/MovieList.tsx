import "./MovieList.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import MovieListCard from "../movie-list-card-component/MovieListCard.tsx";

type MovieListProps = {
    movies: IMovie[];
}
const MovieList: FC<MovieListProps> = ({movies}) => {

    return (
        <ul style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
        }}>
            {
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }
        </ul>
    )
}
export default MovieList;