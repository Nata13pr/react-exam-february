import {useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect, useMemo} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import PaginationPage from "./PaginationPage.tsx";
import MovieListComponent from "../components/movie-list-component/MovieListComponent.tsx";

const MoviesPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {movies, totalPages, genres} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();
    const currentPage = searchParams.get("page") || '1';
    const genreId = searchParams.get("with_genres") || undefined;

    const genresMap = useMemo(() => {
        return genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {} as Record<number, string>);
    }, [genres]);

    useEffect(() => {
        dispatch(movieSliceActions.loadMovies({page: currentPage, id: genreId}));

        window.scrollTo({top: 0, behavior: 'smooth'});

        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }

    }, [currentPage, genreId]);

    return (
        <>
            <MovieListComponent movies={movies} genresMap={genresMap}/>
            {movies.length > 0 && totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
        </>
    )
}
export default MoviesPage;