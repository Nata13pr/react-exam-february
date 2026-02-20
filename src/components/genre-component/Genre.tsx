import "./Genre.css"

import type {IGenre} from "../../models/IGenre.ts";
import {type FC} from "react";
import {useSearchParams} from "react-router";

type GenrePropsType={
    genre:IGenre
}
const Genre:FC<GenrePropsType>=({genre})=>{
    const [searchParams, setSearchParams] = useSearchParams();


    const currentGenreId = searchParams.get("with_genres");

    const handleGenreClick = () => {
        const newParams = new URLSearchParams(searchParams);

        newParams.set("with_genres", genre.id.toString());

        newParams.set("page", "1");

        setSearchParams(newParams);
    };

    return (
        <li className='genre-item'>
            <button
                className={`genre-pill ${currentGenreId === genre.id.toString() ? 'active' : ''}`}
                onClick={handleGenreClick}
            >
                {genre.name}
            </button>
        </li>
    )
}
export default Genre