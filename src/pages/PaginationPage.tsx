import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import {useSearchParams} from "react-router";
import type {FC} from "react";

type PaginationPropsType = {
    totalPages: number,
}

const PaginationPage: FC<PaginationPropsType> = ({totalPages}) => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get("page") || '1');
    const page = Number(searchParams.get('page'))

    const handleOnClickNext = () => {
        if (totalPages > currentPage) {
            setSearchParams({page: (++currentPage).toString()});
        }
    }
    const handleOnClickPrev = () => {
        if (currentPage > 1) {
            setSearchParams({page: (--currentPage).toString()})
        }
    }
    return (
        <>
            <PaginationComponent page={page} handleOnClickNext={handleOnClickNext}
                                 handleOnClickPrev={handleOnClickPrev}/>
        </>
    )
}
export default PaginationPage;
