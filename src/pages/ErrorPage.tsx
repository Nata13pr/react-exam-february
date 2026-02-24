import { useLocation} from "react-router-dom";
import Error from "../components/Error-component/Error.tsx";

const ErrorPage = () => {
    const location = useLocation();
    const errorMessage = location.state?.message || "Something went wrong";

    return (
       <Error message={errorMessage}/>
    );
};

export default ErrorPage;