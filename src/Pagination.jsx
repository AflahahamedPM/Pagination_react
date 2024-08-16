import React, { useState } from "react";

const Pagination = ({ numberOfPages, limit}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (e) => {
    setCurrentPage(Number(e.target.innerHTML));
  };

  const handleIncrement = () => {
    setCurrentPage((prevActivePage) => prevActivePage + 1);
  };

  const handleDecrement = () => {
    setCurrentPage((prevActivePage) => prevActivePage - 1);
  };

  const showPages = (numberOfPages, limit, currentPage) => {
    const pageDifference = numberOfPages - currentPage;
    if (pageDifference < limit) {
      return Array(limit)
        .fill(0)
        .map((_, index) => {
          return numberOfPages - limit + 1 + index;
        });
    } else {
      return Array(limit)
        .fill(0)
        .map((_, index) => {
          return currentPage + index;
        });
    }
  };

  const pagesToBeShowed = showPages(numberOfPages, limit, currentPage);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/4 flex justify-between">
          {currentPage > 1 ? (
            <button
              className="font-semibold text-2xl"
              onClick={handleDecrement}
            >
              {"<"}
            </button>
          ) : (
            <button className="text-2xl cursor-default text-gray-300">
              {"<"}
            </button>
          )}

          <div className="flex justify-between" onClick={handlePageClick}>
            {pagesToBeShowed.map((pageValue, i) => (
              <span
                id={i + 1}
                className={`p-2 ${
                  currentPage === pageValue && `bg-gray-300`
                } rounded-full w-10 h-10 flex items-center justify-center  mr-3 cursor-pointer hover:bg-gray-200`}
                key={i + 1}
              >
                {pageValue}
              </span>
            ))}
            
          </div>
          {currentPage != numberOfPages ? (
            <button
              className="font-semibold text-2xl"
              onClick={handleIncrement}
            >
              {">"}
            </button>
          ) : (
            <button className="text-2xl cursor-default text-gray-300">
              {">"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
