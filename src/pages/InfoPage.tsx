import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

const InfoPage = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movies} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movieId) {
            const foundMovie = movies.find(m => m.id === Number(movieId));

            if (foundMovie) {
                console.log('found')
                dispatch(movieSliceActions.setMovie(foundMovie));
            } else {
                console.log("Movie not in store, fetching from API...");
                dispatch(movieSliceActions.loadMovieById(movieId))
            }
        }

    }, [movieId, movies]);
    return (
        <>
            {/*<MovieList movies={movies}/>*/}
            {/*{movies && <PaginationPage totalPages={totalPages}/>}*/}
        </>
    )
}
export default InfoPage;