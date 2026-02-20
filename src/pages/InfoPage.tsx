import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import MovieInfo from "../components/movie-info-component/MovieInfo.tsx";

const InfoPage = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movies, movie} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movieId) {
            dispatch(movieSliceActions.loadMovieById(movieId))
        }

    }, [movieId, movies]);
    return (
        <>
            <MovieInfo movie={movie}/>
        </>
    )
}
export default InfoPage;