import "./GenreBadgeComponent.css"
import type {FC} from "react";
import type {IGenre} from "../../models/IGenre.ts";
import {useMemo} from "react";

type GenreBadgePropsType = {
    g: IGenre | string,
}

const GenreBadgeComponent: FC<GenreBadgePropsType> = ({g}) => {
    const bgColor = useMemo(() => {
        const id = typeof g === 'object'
            ? g.id
            : g.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        const hue = (id * 137.5) % 360;

        return `hsl(${hue}, 65%, 45%)`;
    }, [g]);

    return (
        <span className="genre-badge" style={{backgroundColor: bgColor}}>
            {typeof g === 'string' ? g : g.name}
        </span>
    );
};

export default GenreBadgeComponent;