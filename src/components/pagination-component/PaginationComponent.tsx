import "./PaginationComponent.css";
import type {FC} from "react";

type PaginationPropsType = {
    page: number;
    handleOnClickNext: () => void;
    handleOnClickPrev: () => void;
}
const PaginationComponent: FC<PaginationPropsType> = ({page, handleOnClickNext, handleOnClickPrev}) => {
    return (
        <div className="pagination-container">
            <button className="nav-button btn-prev" id="prevBtn" onClick={handleOnClickPrev}>
                <svg viewBox="0 0 20 20">
                    <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
                </svg>
                Назад
            </button>

            <div className="page-info">
                Сторінка <span id="currentPage">{page}</span>
            </div>
            <button className="nav-button btn-next" id="nextBtn" onClick={handleOnClickNext}>
                Вперед
                <svg viewBox="0 0 20 20">
                    <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
            </button>
        </div>

    )
}
export default PaginationComponent;