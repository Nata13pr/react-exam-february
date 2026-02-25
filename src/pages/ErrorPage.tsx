import { useLocation} from "react-router-dom";
import ErrorComponent from "../components/error-component/ErrorComponent.tsx";

const ErrorPage = () => {
    const location = useLocation();
    const errorMessage = location.state?.message || "Something went wrong";

    return (
       <ErrorComponent message={errorMessage}/>
    );
};

export default ErrorPage;