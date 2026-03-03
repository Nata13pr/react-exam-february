import {useNavigate, useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import MovieInfoComponent from "../components/movie-info-component/MovieInfoComponent.tsx";

const InfoPage = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movie, genres} = useAppSelector(({movieSlice}) => movieSlice)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }
    }, []);

    useEffect(() => {
        const idAsNumber = Number(movieId);
        if (movieId && (isNaN(idAsNumber) || idAsNumber <= 0)) {
            navigate('/movies', {replace: true});
            return;
        }

        if (movieId) {
            dispatch(movieSliceActions.loadMovieById(movieId));
        }
        return () => {
            dispatch(movieSliceActions.clearMovie());
        };
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