import "./MovieListCardComponent.css"
import type {IMovie} from "../../models/movie/IMovie.ts";
import {type FC, useMemo} from "react";
import {useNavigate} from "react-router";
import StarsRatingComponent from "../stars-rating-component/StarsRatingComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import GenreBadgeComponent from "../genre-badge-component/GenreBadgeComponent.tsx";
import PosterPreviewComponent from "../poster-preview-component/PosterPreviewComponent.tsx";

type MovieListCardProps = {
    movie: IMovie;
}

export const MovieListCardComponent: FC<MovieListCardProps> = ({movie}) => {
    const {genres} = useAppSelector(({movieSlice}) => movieSlice)
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/movie/info/' + movie.id)
    }

    const genresMap = useMemo(() => {
        return genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {} as Record<number, string>);
    }, [genres]);

    return (

        <li className="movie-card" onClick={handleOnClick}>
            <div className="poster-container">
                <PosterPreviewComponent movie={movie}/>

                <div className="card-genres-overlay">
                    {movie.genre_ids.map((g) => (
                        <GenreBadgeComponent key={g} g={genresMap[g] || ""}/>
                    ))}
                </div>

                <div className="card-rating-overlay">
                    <StarsRatingComponent rating={movie.vote_average / 2}/>
                    <span className="rating-val">{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                <span className="card-year">{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</span>
            </div>
        </li>
    )
}
export default MovieListCardComponent;