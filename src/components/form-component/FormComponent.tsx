import "./FormComponent.css";
import {useForm} from "react-hook-form";
import {type FC, useState} from "react";
import {ERROR_MESSAGES} from "../../constants/errors.ts";
import {useNavigate, useSearchParams} from "react-router";
import type {IForm} from "../../models/IForm.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../redux/slices/movieSlice/movieSlice.ts";

type FormPropsType = {
    onClose: () => void;
}

const FormComponent: FC<FormPropsType> = ({onClose}) => {
    const dispatch = useAppDispatch();
    const [serverError, setServerError] = useState<string | null>(null);
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<IForm>({
        mode: 'all',
    });
    const navigate = useNavigate();


    const customHandler = async (formDataProps: IForm) => {
        setServerError(null);
        if (!formDataProps.movieName) return;
        try {
            dispatch(movieSliceActions.loadMoviesBySearch(formDataProps))

            dispatch(movieSliceActions.setSearchQuery(formDataProps.movieName));
            reset()
            navigate(`/search`);
            onClose()
        } catch (error: any) {
            console.error('Login error:', error);
            let message = ERROR_MESSAGES.UNKNOWN;
            if (error.response) {
                const status = error.response.status;
                if (status === 400) message = ERROR_MESSAGES.USER_NOT_FOUND;
                else if (status === 401) message = ERROR_MESSAGES.UNAUTHORIZED;
                else if (status === 403) message = ERROR_MESSAGES.FORBIDDEN;
                else if (status === 404) message = ERROR_MESSAGES.NOT_FOUND;
                else if (status >= 500) message = ERROR_MESSAGES.SERVER_ERROR;
            } else if (error.request) {
                message = ERROR_MESSAGES.NETWORK_ERROR;
            }
            setServerError(message);
        }
    }
    return (

        // <form onSubmit={handleSubmit(customHandler)}>
        //     <div className="input-field">
        //         <label>
        //             <input
        //                 type="text"
        //                 placeholder="Search movies..."
        //                 autoFocus
        //                 {...register("movieName", {
        //                     onBlur: (e) => {
        //                         if (e.target.value === "") onClose(); // Тепер це працює правильно
        //                     }
        //                 })}/>
        //             {errors.movieName && <div className="field-error-message">{errors.movieName.message}</div>}
        //         </label>
        //     </div>
        //     <button className="submit-button" disabled={!isValid}>Search</button>
        // </form>
        // FormComponent.tsx
// ... логіка залишається твоєю ...
        <form onSubmit={handleSubmit(customHandler)} className="search-form">
            <input
                type="text"
                className="search-input"
                placeholder="Search movies..."
                autoFocus
                {...register("movieName", {
                    onBlur: (e) => { if (e.target.value === "") onClose(); }
                })}/>
            {/* Кнопку Search приховуємо для стилю Flix.id */}
        </form>

    )
}
export default FormComponent;