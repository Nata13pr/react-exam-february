import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import {useSearchParams} from "react-router";
import {type FC, useEffect} from "react";

type PaginationPropsType = {
    totalPages: number,
}
const PaginationPage: FC<PaginationPropsType> = ({totalPages}) => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const rawPage = searchParams.get("page");


    useEffect(() => {
        const parsed = Number(rawPage);

        if (rawPage && (isNaN(parsed) || parsed < 1)) {
            setSearchParams(prev => {
                prev.set("page", "1");
                return prev;
            }, {replace: true});
        }
    }, [rawPage, setSearchParams]);


    const currentPage = Math.max(1, parseInt(rawPage || '1') || 1);

    const changePage = (newPage: number) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set("page", newPage.toString());
            return params;
        });
    };

    const handleOnClickNext = () => {
        if (totalPages > currentPage) changePage(currentPage + 1);
    };

    const handleOnClickPrev = () => {
        if (currentPage > 1) changePage(currentPage - 1);
    };

    return (
        <PaginationComponent
            page={currentPage}
            handleOnClickNext={handleOnClickNext}
            handleOnClickPrev={handleOnClickPrev}
        />
    );
};
export default PaginationPage