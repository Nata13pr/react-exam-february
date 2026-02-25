import "./GenreBadgeComponent.css"
import {getRandomColor} from "./RandomColor.tsx";
import type {FC} from "react";
import type {IGenre} from "../../models/IGenre.ts";
import {useMemo} from "react";

type GenreBadgePropsType = {
    g: IGenre | string,
}

const GenreBadgeComponent: FC<GenreBadgePropsType> = ({g}) => {
    const bgColor = useMemo(() => getRandomColor(), []);

    return (
        <span className="genre-badge" style={{backgroundColor: bgColor}}>
            {typeof g === 'string' ? g : g.name}
        </span>
    );
};

export default GenreBadgeComponent;