import React from "react";

const Pagination = ({ onPageChange, length, mealsPerPage }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className=" w-1/4 flex m-auto">
      <ul className="pagination h-12  m-auto flex overflow-x-auto">
        {Array.from({
          length: Math.ceil(length / mealsPerPage),
        }).map((_, index) => (
          <li
            key={index}
            className="page-item  ml-4 bg-orange-400 h-16 text-white w-11 m-auto font-bold p-4 hover:bg-orange-600 "
          >
            <button
              onClick={() => handlePageChange(index + 1)}
              className="page-link"
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
