import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {tvShowSliceActions} from "../redux/slices/tvShowSlice/tvShowSlice.ts";
import TvShowInfoComponent from "../components/tvShow-info-component/TvShowInfoComponent.tsx";

const InfoPage = () => {
    const {tvshowId} = useParams<{ tvshowId: string }>();
    const {tvShow} = useAppSelector(({tvShowSlice}) => tvShowSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (tvshowId) {
            dispatch(tvShowSliceActions.loadTvShowById(tvshowId))
        }
    }, [tvshowId]);
    useEffect(() => {
        if (tvshowId) {
            dispatch(tvShowSliceActions.loadTvShowById(tvshowId));
        }
    }, [tvshowId]);

    if (!tvShow || tvShow.id.toString() !== tvshowId) {
        return <div className="loading-spinner">Loading movie details...</div>;
    }
    return (
        <>
            <TvShowInfoComponent tvShow={tvShow}/>
        </>
    )
}
export default InfoPage;