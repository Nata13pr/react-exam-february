import "./PosterPreviewComponent.css"
import type {FC} from "react";
import {useState} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx"

type PosterPreviewPropsType = {
    movie: IMovie
}
const PosterPreviewComponent: FC<PosterPreviewPropsType> = ({movie}) => {
    const {isLoading} = useAppSelector(state => state.movieSlice);
    const [imageFileLoaded, setImageFileLoaded] = useState(false);

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const posterSrc = movie.poster_path
        ? `${baseImageUrl}${movie.poster_path}`
        : "https://placehold.jp/44/999999/ffffff/500x750.png?text=No+Poster";

    const showSkeleton = isLoading || !imageFileLoaded;

    return (
        <div className="poster-container-inner">
            {showSkeleton && <div className="skeleton"/>}

            <img
                src={posterSrc}
                alt={movie.title}
                className={`card-image ${imageFileLoaded ? 'visible' : 'hidden'}`}
                onLoad={() => setImageFileLoaded(true)}
                onError={() => setImageFileLoaded(true)}
            />
        </div>
    );
};
export default PosterPreviewComponent;