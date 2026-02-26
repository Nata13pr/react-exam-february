import "./PosterPreviewComponent.css"
import type {FC} from "react";
import {useState} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";
import type {ITVShow} from "../../models/series/ITVShow.ts";

type PosterPreviewPropsType = {
    movie: IMovie | ITVShow
}
const PosterPreviewComponent: FC<PosterPreviewPropsType> = ({movie}) => {
    const [imageFileLoaded, setImageFileLoaded] = useState(false);

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const posterSrc = movie.poster_path
        ? `${baseImageUrl}${movie.poster_path}`
        : "https://placehold.jp/44/999999/ffffff/500x750.png?text=No+Poster";


    return (
        <div className="poster-container-inner">
            {!imageFileLoaded && <div className="skeleton"/>}
            <img
                src={posterSrc}
                alt={'title' in movie ? movie.title : movie.name}
                className={`card-image ${imageFileLoaded ? 'visible' : 'hidden'}`}
                onLoad={() => setImageFileLoaded(true)}
                onError={() => setImageFileLoaded(true)}
            />
        </div>
    );
};
export default PosterPreviewComponent;