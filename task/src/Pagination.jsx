

import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = currentPage * itemsPerPage < totalItems;
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      ) : (
        <button className="btn" disabled></button>
      )}
      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable ? (
        <button className="btn" onClick={goNext}>
          →
        </button>
      ) : (
        <button className="btn" disabled></button>
      )}
    </div>
  );
};

export default Pagination;