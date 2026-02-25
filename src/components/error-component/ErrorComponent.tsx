import {useNavigate} from "react-router-dom";
import type {FC} from "react";
import "./ErrorComponent.css";

type ErrorPropsType = {
    message: string
}

const ErrorComponent: FC<ErrorPropsType> = ({message}) => {
    const navigate = useNavigate();

    return (
        <div className="error-page-wrapper">
            <div className="info-banner">
                <span className="info-banner-title">Attention</span>
                <p className="info-banner-text">
                    ⚠️ {message}
                </p>
            </div>
            <button onClick={() => navigate(-1)} className="back-to-search-btn">
                ← Return back
            </button>
        </div>
    )
}
export default ErrorComponent;