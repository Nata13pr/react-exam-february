import "./GenreBadge.css"
import {getRandomColor} from "./RandomColor.tsx";
import type {FC} from "react";
import type {IGenre} from "../../models/IGenre.ts";

type GenreBadgePropsType = {
    g: IGenre | string,
}

const GenreBadge: FC<GenreBadgePropsType> = ({g}) => {

    return (
        <span className="genre-badge"
              style={{backgroundColor: getRandomColor()}}>
       {typeof g === 'string' ? g : g.name}
        </span>
    )
}
export default GenreBadge;