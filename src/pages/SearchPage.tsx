import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import MovieListComponent from "../components/movie-list-component/MovieListComponent.tsx";
import PaginationPage from "./PaginationPage.tsx";
import SearchErrorComponent from "../components/search-error-component/SearchErrorComponent.tsx";
import {useGenresMap} from "../redux/hooks/useGenresMap.tsx";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {movies, totalPages, searchQuery, isLoading, genres} = useAppSelector(({movieSlice}) => movieSlice);

    const query = searchParams.get("query") || "";
    const page = searchParams.get("page") || "1";

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }
    }, []);

    useEffect(() => {
        const isPageInvalid = isNaN(Number(page)) || Number(page) < 1;

        if (isPageInvalid ) {

            navigate('/movies?page=1', {replace: true});
            return;
        }
        if (!query && searchQuery) {
            setSearchParams({query: searchQuery, page: "1"});
            return;
        }

        if (query) {
            dispatch(movieSliceActions.loadMoviesBySearch({query, page}));
        }
    }, [query, page, searchQuery]);

    const genresMap = useGenresMap();
    const hasMovies = movies?.length > 0;
    const isNotFound = !isLoading && movies?.length === 0 && query;

    return (
        <>
            {hasMovies && (
                <>
                    <MovieListComponent movies={movies} genresMap={genresMap}/>
                    {totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
                </>
            )}
            {isNotFound && <SearchErrorComponent query={query}/>}
        </>
    );
};

export default SearchPage;