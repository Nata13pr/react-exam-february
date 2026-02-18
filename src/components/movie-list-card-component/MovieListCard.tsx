import "./MovieListCard.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";

type MovieListCardProps = {
    movie: IMovie;
}

export const MovieListCard: FC<MovieListCardProps> = ({movie}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/movie/info/' + movie.id)
    }
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const posterSrc = movie.poster_path
        ? `${baseImageUrl}${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Poster";
    return (
        <li onClick={handleOnClick}>
            <div>{movie.title}</div>
            <img style={{width: 100}} src={posterSrc} alt={movie.title}/>
        </li>
    )
}
export default MovieListCard;