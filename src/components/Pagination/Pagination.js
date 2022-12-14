import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber, setPageNumber}) => {
    let [width, setWidth] = useState(window.innerWidth);
    console.log(width);
    let updateDimension = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);
    }, []);
    return (
    <>
    <style jsx>
        {`
        @media (max-width: 768px){
            .next, .prev {
                display: none;
            }
            .pagination {
                font-size: 14px;
            }
        }
        `}
    </style>

    <ReactPaginate 
    className="pagination justify-content-center gap-3 my-4"
    nextLabel="Next"
    onPageChange={(data) => {
        setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages}
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    previousLabel="Previous"
    previousClassName="btn btn-outline-secondary fs-5 prev"
    nextClassName="btn btn-outline-secondary fs-5 next"
    activeClassName="active"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    /> </>
    );
};

export default Pagination;