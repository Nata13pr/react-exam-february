import {useEffect, useMemo} from "react";
import {useAppDispatch} from "./useAppDispatch";
import {useAppSelector} from "./useAppSelector";
import {movieSliceActions} from "../slices/movieSlice/movieSlice.ts";

export const useGenresMap = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(({movieSlice}) => movieSlice);

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(movieSliceActions.loadAllGenres());
        }
    }, [dispatch, genres.length]);

    return useMemo(() => {
        return genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {} as Record<number, string>);
    }, [genres])
}