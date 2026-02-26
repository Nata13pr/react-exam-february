import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import MovieInfoComponent from "../components/movie-info-component/MovieInfoComponent.tsx";

const InfoPage = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movie} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movieId) {
            dispatch(movieSliceActions.loadMovieById(movieId))
        }

    }, [movieId]);
    return (
        <>
            <MovieInfoComponent movie={movie}/>
        </>
    )
}
export default InfoPage;