import {useRef} from "react";
import "./GenresList.css";
import Genre from "../genre-component/Genre.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

const GenresList = () => {
    const { genres } = useAppSelector(({ movieSlice }) => movieSlice);
    const scrollRef = useRef<HTMLUListElement>(null);

    // Подвоюємо або потроюємо масив для безкінечного ефекту
    const infiniteGenres = [...genres, ...genres, ...genres];

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Якщо докрутили до кінця — миттєво повертаємо в центр
        if (scrollLeft + clientWidth >= scrollWidth) {
            scrollRef.current.scrollLeft = scrollLeft - (scrollWidth / 3);
        }
        // Якщо докрутили до самого початку — стрибаємо вперед
        if (scrollLeft <= 0) {
            scrollRef.current.scrollLeft = scrollWidth / 3;
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="genres-section">
            <div className="genres-viewport">
                <ul
                    className="genres-list-container"
                    ref={scrollRef}
                    onScroll={handleScroll} // Відстежуємо позицію
                >
                    {infiniteGenres.map((genre, index) => (
                        <Genre key={`${genre.id}-${index}`} genre={genre}/>
                    ))}
                </ul>
            </div>

            <div className="carousel-controls">
                <button className="nav-arrow" onClick={() => scroll("left")}>‹</button>
                <button className="nav-arrow" onClick={() => scroll("right")}>›</button>
            </div>
        </div>
    );
};
export default GenresList;