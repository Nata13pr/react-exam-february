import {useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import PaginationPage from "./PaginationPage.tsx";
import MovieList from "../components/movie-list-component/MovieList.tsx";

const MoviesPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {movies, totalPages} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();
    const currentPage = searchParams.get("page") || '1';
    const genreId = searchParams.get("with_genres") || undefined;

    useEffect(() => {
        dispatch(movieSliceActions.loadMovies(
            {
                page: currentPage,
                id: genreId
            }
        ))
        dispatch(movieSliceActions.loadAllGenres())
    }, [searchParams]);

    return (
        <>
            <MovieList movies={movies}/>
            {movies && <PaginationPage totalPages={totalPages}/>}
        </>
    )
}
export default MoviesPage;