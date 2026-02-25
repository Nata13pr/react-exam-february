import {useEffect} from "react";
import {useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import MovieListComponent from "../components/movie-list-component/MovieListComponent.tsx";
import PaginationPage from "./PaginationPage.tsx";
import SearchErrorComponent from "../components/search-error-component/SearchErrorComponent.tsx";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const {movies, totalPages, searchQuery, isLoading} = useAppSelector(({movieSlice}) => movieSlice);

    const query = searchParams.get("query") || "";
    const page = searchParams.get("page") || "1";

    useEffect(() => {

        if (!query && searchQuery) {
            setSearchParams({query: searchQuery, page: "1"});
            return;
        }

        if (query) {
            dispatch(movieSliceActions.loadMoviesBySearch({query, page}));
        }
    }, [query,page, searchQuery,]);

    const hasMovies = movies?.length > 0;
    const isNotFound = !isLoading && movies?.length === 0 && query;

    return (
        <>
            {hasMovies && (
                <>
                    <MovieListComponent movies={movies}/>
                    {totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
                </>
            )}
            {isNotFound && <SearchErrorComponent query={query}/>}
        </>
    );
};

export default SearchPage;