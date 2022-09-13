import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailbale = currentPage !== 1;
  const isNextPageAvailbale = Math.ceil(totalItems / itemsPerPage) !== currentPage;

  return (
    <div className="pagination">
      {isPrevPageAvailbale ? (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      ) : (
        <button className="btn" disabled={true}></button>
      )}
      <span className="pagination__page">{currentPage}</span>

      {isNextPageAvailbale ? (
        <button className="btn" onClick={goNext}>
          →
        </button>
      ) : (
        <button className="btn" disabled={true}></button>
      )}
    </div>
  );
};

export default Pagination;
