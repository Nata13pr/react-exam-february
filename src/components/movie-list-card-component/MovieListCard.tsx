import "./MovieListCard.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";
import StarsRating from "../stars-rating-component/StarsRating.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import GenreBadge from "../genre-badge-component/GenreBadge.tsx";
import PosterPreview from "../poster-preview-component/PosterPreview.tsx";

type MovieListCardProps = {
    movie: IMovie;
}

export const MovieListCard: FC<MovieListCardProps> = ({movie}) => {
    const {genres} = useAppSelector(({movieSlice}) => movieSlice)
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/movie/info/' + movie.id)
    }
    const getGenreName = (id: number) => {
        const genre = genres.find((g: any) => g.id === id);
        return genre ? genre.name : "";
    };

    return (

        <li className="movie-card" onClick={handleOnClick}>
            <div className="poster-container">
                <PosterPreview movie={movie}/>

                {/* Жанри поверх постера зверху */}
                <div className="card-genres-overlay">
                    {movie.genre_ids.map((g,id) => (
                        <GenreBadge key={id} g={getGenreName(g)}/>
                    ))}
                </div>

                <div className="card-rating-overlay">
                    <StarsRating rating={movie.vote_average / 2} />
                    <span className="rating-val">{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                <span className="card-year">{movie.release_date?.split('-')[0]}</span>
            </div>
        </li>
    )
}
export default MovieListCard;