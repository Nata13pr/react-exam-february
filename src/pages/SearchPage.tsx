import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import PaginationPage from "./PaginationPage.tsx";
import {useSearchParams} from "react-router";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";
import MovieList from "../components/movie-list-component/MovieList.tsx";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const {movies, totalPages, searchQuery} = useAppSelector(({movieSlice}) => movieSlice);

    useEffect(() => {
        const query = searchParams.get("query");
        const page = searchParams.get("page") || '1';
        if (!query) {
            setSearchParams({
                query: searchQuery,
                page
            });
        }
        if (query) {
            dispatch(movieSliceActions.loadMoviesBySearch({query, page}));
        }
    }, [searchParams]);

    return (
        <div>
            <MovieList movies={movies}/>
            {totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
            {movies && movies.length === 0 && (
                <div className="no-movies-found">
                    🔍︎ Movies not found. Try another search.
                </div>
            )}
        </div>
    )
}
export default SearchPage;