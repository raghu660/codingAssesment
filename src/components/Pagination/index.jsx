import React from 'react';
import Pagination from "react-js-pagination";

const PaginationWrapper = ({activePage = 1, totalItemsCount, onPageChange}) => {
    const onChange = (currentPageNumber) => {
        if(typeof onPageChange === 'function'){
            onPageChange(currentPageNumber)
        }
    }

    return (
        <Pagination
            prevPageText='prev'
            nextPageText='next'
            firstPageText='first'
            lastPageText='last'
            
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={onChange}
        />
    )
}

export default PaginationWrapper;