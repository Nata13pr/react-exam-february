import {useSearchParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect, useMemo} from "react";
import PaginationPage from "./PaginationPage.tsx";
import TvShowListComponent from "../components/tvShow-list-component/TvShowListComponent.tsx";
import {tvShowSliceActions} from "../redux/slices/tvShowSlice/tvShowSlice.ts";

const TvShowPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const {tvShows, totalPages, genres} = useAppSelector(({tvShowSlice}) => tvShowSlice)
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
        dispatch(tvShowSliceActions.loadTVShows({page: currentPage, id: genreId}));

        window.scrollTo({top: 0, behavior: 'smooth'});

        if (genres.length === 0) {
            dispatch(tvShowSliceActions.loadAllTvGenres());
        }

    }, [currentPage, genreId, genres.length]);

    return (
        <>
            <TvShowListComponent tvShows={tvShows} genresMap={genresMap}/>
            {tvShows.length > 0 && totalPages > 1 && <PaginationPage totalPages={totalPages}/>}
        </>
    )
}
export default TvShowPage;