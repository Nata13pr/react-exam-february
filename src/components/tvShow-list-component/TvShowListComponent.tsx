import "./TvShowListComponent.css"
import {type FC} from "react";
import type {ITVShow} from "../../models/series/ITVShow.ts";
import TvShowListCardComponent from "../tvShow-list-card-component/TvShowListCardComponent.tsx";

type TvShowListProps = {
    tvShows: ITVShow[];
    genresMap: { [key: number]: string }
}
const TvShowListComponent: FC<TvShowListProps> = ({tvShows, genresMap}) => {

    return (
        <ul className='movie-list'>
            {
                tvShows.map(tvShow => <TvShowListCardComponent key={tvShow.id} tvShow={tvShow} genresMap={genresMap}/>)
            }
        </ul>
    )
}
export default TvShowListComponent;