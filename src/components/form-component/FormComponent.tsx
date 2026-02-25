import "./FormComponent.css";
import {useForm} from "react-hook-form";
import {type FC, useEffect} from "react";
import {useNavigate} from "react-router";
import type {IForm} from "../../models/IForm.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../redux/slices/movieSlice/movieSlice.ts";
import MovieValidator from "../../validators/movie.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

type FormPropsType = {
    onClose: () => void;
    onSearchError: () => void;
}

const FormComponent: FC<FormPropsType> = ({onClose, onSearchError}) => {
    const {handleSubmit, register, reset, watch,clearErrors, formState: {errors,isSubmitted}} = useForm<IForm>({
        mode: 'onChange',
        resolver: joiResolver(MovieValidator),
        shouldFocusError: true,
    });

    const movieNameValue = watch("movieName");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const errorType = errors.movieName?.type;

        if (!movieNameValue && !isSubmitted) {
            clearErrors("movieName");
            return;
        }

        if (movieNameValue && errorType === 'string.empty') {
            clearErrors("movieName");
        }

        if (errorType === 'string.pattern.base') {
            onSearchError();
        }
    }, [movieNameValue, errors.movieName, onSearchError, clearErrors, isSubmitted]);

    const customHandler = async (formDataProps: IForm) => {
        try {
            const resultAction = await dispatch(movieSliceActions.loadMoviesBySearch(formDataProps));

            if (movieSliceActions.loadMoviesBySearch.fulfilled.match(resultAction)) {
                dispatch(movieSliceActions.setSearchQuery(formDataProps.movieName));
                reset();
                navigate(`/search`);
                onClose();
            } else {
                navigate("/error", {
                    state: { message: "Server is currently unavailable. Please try again later." }
                });
                onClose();
            }
        } catch (error: any) {
            navigate("/error", { state: { message: "Network connection error" } });
            onClose();
        }
    };
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit(customHandler)} className="search-form">
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className={`search-input ${errors.movieName ? "input-error" : ""}`}
                    {...register("movieName")}
                />
            </form>

            {errors.movieName && (
                <div className="search-tooltip-bottom">
                    {errors.movieName.message}
                </div>
            )}
        </div>
    );
};
export default FormComponent;