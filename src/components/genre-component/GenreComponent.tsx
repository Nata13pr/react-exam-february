import {type FC} from "react";
import {useNavigate, useSearchParams} from "react-router";

import "./GenreComponent.css"
import type {IGenre} from "../../models/IGenre.ts";

type GenrePropsType = {
    genre: IGenre
}
const GenreComponent: FC<GenrePropsType> = ({genre}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const currentGenreId = searchParams.get("with_genres");

    const handleGenreClick = () => {
        const newParams = new URLSearchParams();
        newParams.set("with_genres", genre.id.toString());
        newParams.set("page", "1");

        if (window.location.pathname.includes("info") || window.location.pathname.includes("search")) {
            navigate(`/movies?${newParams.toString()}`);
        } else {
            setSearchParams(newParams);
        }
    };
    return (
        <button
            className={`genre-pill ${currentGenreId === genre.id.toString() ? 'active' : ''}`}
            onClick={handleGenreClick}>
            {genre.name}
        </button>
    )
}
export default GenreComponent;