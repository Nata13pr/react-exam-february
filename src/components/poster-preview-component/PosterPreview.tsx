import "./PosterPreview.css"
import type {FC} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";

type PosterPreviewPropsType = {
    movie: IMovie
}
const PosterPreview: FC<PosterPreviewPropsType> = ({movie}) => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const posterSrc = movie.poster_path
        ? `${baseImageUrl}${movie.poster_path}`
        : "https://placehold.jp/44/999999/ffffff/500x750.png?text=No+Poster";

    return (
        <img src={posterSrc} alt={movie.title} className="card-image"/>
    )
}
export default PosterPreview;