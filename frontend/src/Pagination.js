import React from 'react';
import './css/Pagination.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPaginationItems = () => {
    const pages = [];
    const maxVisiblePages = 3;

    pages.push(1);

    if (currentPage > maxVisiblePages) {
      pages.push('...');
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - (maxVisiblePages - 1)) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className='btn-back'
          onClick={() => onPageChange(currentPage - 1)}
        >
          ← Назад
        </button>
      )}
      {getPaginationItems().map((page, index) =>
        page === '...' ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <button
            className='btn-pagination-page'
            key={page}
            //className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
      {currentPage < totalPages && (
        <button
          className='btn-next'
          onClick={() => onPageChange(currentPage + 1)}
        >
          Далі →
        </button>
      )}
    </div>
  );
};

export default Pagination;
