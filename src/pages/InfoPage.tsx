import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import MovieInfoComponent from "../components/movie-info-component/MovieInfoComponent.tsx";

const InfoPage = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movie, genres} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }
    }, []);

    useEffect(() => {
        if (movieId) {
            dispatch(movieSliceActions.loadMovieById(movieId));
        }
    }, [movieId]);

    if (!movie || movie.id.toString() !== movieId) {
        return <div className="loading-spinner">Loading movie details...</div>;
    }
    return (
        <>
            <MovieInfoComponent movie={movie}/>
        </>
    )
}
export default InfoPage;