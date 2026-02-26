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

    const changePage = (newPage: number) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set("page", newPage.toString());
            return params;
        });
    };

    const handleOnClickNext = () => {
        if (totalPages > currentPage) {
            changePage(currentPage + 1);
        }
    }
    const handleOnClickPrev = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
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
