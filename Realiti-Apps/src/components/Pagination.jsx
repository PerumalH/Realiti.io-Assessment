import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-3 py-1 mx-1 bg-orange-300 rounded disabled:opacity-50 text-black"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <span className="px-3 py-3  text-white align-center rounded">
        {currentPage}
      </span>
      <button
        className="px-3 py-1 mx-1 bg-orange-300 text-black rounded disabled:opacity-50 "
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
