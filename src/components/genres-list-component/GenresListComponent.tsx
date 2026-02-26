import {useEffect, useRef} from "react";
import "./GenresListComponent.css";
import GenreComponent from "../genre-component/GenreComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useLocation} from "react-router-dom";

const GenresListComponent = () => {
    const scrollRef = useRef<HTMLUListElement>(null);
    const isScrolling = useRef(false);
    const hasCentered = useRef(false);
    const { pathname } = useLocation();

    const isTvPage = pathname.includes('/tv');

    const genres = useAppSelector((state) =>
        isTvPage ? state.tvShowSlice.genres : state.movieSlice.genres
    );
    const infiniteGenres = [...genres, ...genres, ...genres];

    const resetPosition = () => {
        const container = scrollRef.current;
        if (!container) return;

        const {scrollLeft, scrollWidth, clientWidth} = container;
        const oneThird = scrollWidth / 3;

        container.style.scrollBehavior = "auto";

        if (scrollLeft <= 20) {
            container.scrollLeft = scrollLeft + oneThird;
        } else if (scrollLeft + clientWidth >= scrollWidth - 20) {
            container.scrollLeft = scrollLeft - oneThird;
        }
    };

    const handleScroll = () => {
        if (!isScrolling.current) resetPosition();
    };

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container || isScrolling.current) return;

        isScrolling.current = true;
        container.style.scrollBehavior = "smooth";

        const scrollAmount = container.clientWidth;
        const offset = direction === "left" ? -scrollAmount : scrollAmount;

        container.scrollBy({left: offset});

        setTimeout(() => {
            isScrolling.current = false;
            resetPosition();
        }, 500);
    };

    useEffect(() => {
        if (genres.length > 0 && !hasCentered.current && scrollRef.current) {
            const container = scrollRef.current;
            const timer = setTimeout(() => {
                container.style.scrollBehavior = "auto";
                container.scrollLeft = container.scrollWidth / 3;
                hasCentered.current = true;
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [genres]);

    return (
        <section className="genres-section">
            <div className="genres-viewport">
                <ul
                    className="genres-list-container"
                    ref={scrollRef}
                    onScroll={handleScroll}>
                    {infiniteGenres.map((genre, index) => (
                        <li key={`${genre.id}-${index}`} className="genre-item-wrapper">
                            <GenreComponent genre={genre}/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="carousel-controls">
                <button className="nav-arrow" onClick={() => scroll("left")}>‹</button>
                <button className="nav-arrow" onClick={() => scroll("right")}>›</button>
            </div>
        </section>
    );
};

export default GenresListComponent;