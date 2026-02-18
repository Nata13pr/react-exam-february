import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import PaginationPage from "./PaginationPage.tsx";
import {useSearchParams} from "react-router";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../redux/slices/movieSlice/movieSlice.ts";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const { moviesSearch, moviesSearchTotalPages,searchQuery } = useAppSelector(({ movieSlice }) => movieSlice);

    useEffect(() => {
        const query = searchParams.get("query");
        const page = searchParams.get("page") || '1';
   if(!query){
       setSearchParams({
           query: searchQuery,
           page
       });
   }
        if (query) {
            dispatch(movieSliceActions.loadMoviesBySearch({ query, page }));
        }
    }, [searchParams]);

    return (
        <>
            {moviesSearchTotalPages > 1 && <PaginationPage totalPages={moviesSearchTotalPages}/>}
            {
                moviesSearch.map(movie => <div key={movie.id}>{movie.name}</div>)
            }
        </>
    )
}
export default SearchPage;