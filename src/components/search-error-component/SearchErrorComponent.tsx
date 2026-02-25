import "./SearchErrorComponent.css"
import type {FC} from "react";

type SearchErrorProps = {
    query: string
}

const SearchErrorComponent: FC<SearchErrorProps> = ({query}) => {
    return (
        <div className="no-movies-found-wrapper">
            <div className="search-empty-icon">🔍︎</div>
            <h1>No movies found for "{query}"</h1>
            <p>Try different keywords or check for typos.</p>
        </div>
    );
}
export default SearchErrorComponent