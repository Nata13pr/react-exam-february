import {useNavigate} from "react-router-dom";
import type {FC} from "react";

type ErrorPropsType={
    message:string
}
const Error:FC<ErrorPropsType> = ({message}) => {
    const navigate = useNavigate();
    return (
        <div className="error-page-wrapper">
            <div className="info-banner">
                <span className="info-banner-title">Information</span>
                <p className="info-banner-text">
                    {message}
                </p>
            </div>
            <button onClick={() => navigate(-1)} className="back-to-search-btn">
                Back to Search
            </button>
        </div>
    )
}
export default Error;