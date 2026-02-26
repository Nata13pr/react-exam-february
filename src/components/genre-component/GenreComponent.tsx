import {type FC} from "react";
import {useNavigate, useSearchParams} from "react-router";

import "./GenreComponent.css"
import type {IGenre} from "../../models/IGenre.ts";
import {useLocation} from "react-router-dom";

type GenrePropsType = {
    genre: IGenre
}
const GenreComponent: FC<GenrePropsType> = ({genre}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const currentGenreId = searchParams.get("with_genres");
    const {pathname} = useLocation();

    const handleGenreClick = () => {
        const newParams = new URLSearchParams();
        newParams.set("with_genres", genre.id.toString());
        newParams.set("page", "1");

        const isTvSection = pathname.includes("/tv") || pathname.includes("/tvshows");

        if (pathname.includes("info") || pathname.includes("search")) {

            const targetPath = isTvSection ? "/tvshows" : "/movies";
            navigate(`${targetPath}?${newParams.toString()}`);
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