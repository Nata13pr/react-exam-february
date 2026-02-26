import "./TvShowListCardComponent.css";
import {type FC} from "react";
import {useNavigate} from "react-router";
import StarsRatingComponent from "../stars-rating-component/StarsRatingComponent.tsx";
import GenreBadgeComponent from "../genre-badge-component/GenreBadgeComponent.tsx";
import PosterPreviewComponent from "../poster-preview-component/PosterPreviewComponent.tsx";
import type {ITVShow} from "../../models/series/ITVShow.ts";

type TvShowListCardProps = {
    tvShow: ITVShow;
    genresMap: { [key: number]: string }
}

export const TvShowListCardComponent: FC<TvShowListCardProps> = ({tvShow, genresMap}) => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/tvshow/info/' + tvShow.id)
    }

    return (

        <li className="movie-card" onClick={handleOnClick}>
            <div className="poster-container">
                <PosterPreviewComponent movie={tvShow}/>

                <div className="card-genres-overlay">
                    {tvShow.genre_ids.map((g) => (
                        <GenreBadgeComponent key={g} g={genresMap[g] || ""}/>
                    ))}
                </div>

                <div className="card-rating-overlay">
                    <StarsRatingComponent rating={tvShow.vote_average / 2}/>
                    <span className="rating-val">{tvShow.vote_average.toFixed(1)}</span>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{tvShow.name}</h3>
            </div>
        </li>
    )
}
export default TvShowListCardComponent;