import {useNavigate, useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import PaginationPage from "./PaginationPage.tsx";
import MovieListComponent from "../components/movie-list-component/MovieListComponent.tsx";
import {useGenresMap} from "../redux/hooks/useGenresMap.tsx";

const MoviesPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {movies, totalPages, genres} = useAppSelector(({movieSlice}) => movieSlice)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPage = searchParams.get("page") || '1';
    const genreId = searchParams.get("with_genres") || undefined;

    useEffect(() => {
        const isPageInvalid = isNaN(Number(currentPage)) || Number(currentPage) < 1;
        const isGenreInvalid = genreId && (isNaN(Number(genreId)) || Number(genreId) <= 0);
        if (isPageInvalid || isGenreInvalid) {

            navigate('/movies?page=1', {replace: true});
            return;
        }

        dispatch(movieSliceActions.loadMovies({
            page: currentPage,
            id: genreId
        }));

        window.scrollTo({top: 0, behavior: 'smooth'});

        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }

    }, [currentPage, genreId, navigate]);

    const genresMap = useGenresMap();

    return (
        <>
            <MovieListComponent movies={movies} genresMap={genresMap}/>
            {movies.length > 0 && totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
        </>
    )
}
export default MoviesPage;