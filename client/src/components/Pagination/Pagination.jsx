import { useState, useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ exercisesPerPage, totalExercises, paginate }) => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    setNum(1);
  }, [totalExercises]);

  const totalPages = Math.ceil(totalExercises / exercisesPerPage);

  let startPage = Math.max(num - 2, 1);
  let endPage = Math.min(num + 1, totalPages);

  if (endPage - startPage < 3) {
    if (startPage === 1) {
      endPage = Math.min(startPage + 3, totalPages);
    } else {
      startPage = Math.max(endPage - 3, 1);
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push({ page: i });
  }

  function handlePageClick(pageNumber) {
    setNum(pageNumber);
    paginate(pageNumber);
  }

  function handleNextClick() {
    if (num + 4 <= totalPages) {
      setNum(num + 1);
      paginate(num + 1);
    }
  }

  function handleBackClick() {
    if (num > 1) {
      setNum(num - 1);
      paginate(num - 1);
    }
  }

  if (totalExercises === 0) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="flex bg-neutral-800 rounded-lg font-[Poppins]">
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageClick(1)}
              className={`h-12 border-2 border-r-0 border-yellow-500 w-12 ${
                1 === num ? "bg-neutral-900 text-white-500" : ""
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="pagination-dots">...</span>}
          </>
        )}
        {pages.map((pg, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(pg.page)}
            className={`h-12 border-2 border-r-0 border-yellow-500 w-12 ${
              pg.page === num ? "bg-neutral-900 text-white-500" : ""
            }`}
          >
            {pg.page}
          </button>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="pagination-dots">...</span>
            )}
            <button
              onClick={() => handlePageClick(totalPages)}
              className={`h-12 border-2 border-r-0 border-yellow-500 w-12 ${
                totalPages === num ? "bg-neutral-900 text-white-500" : ""
              }`}
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={handleNextClick}
          className="h-12 border-2  border-yellow-500 px-4 rounded-r-lg bg-neutral-900 hover:text-yellow-500"
        >
          <svg
            class="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
