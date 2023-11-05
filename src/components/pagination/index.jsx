/* eslint-disable react/prop-types */

// react-icons
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
const Pagination = ({
  pageNumber,
  currentPage,
  setCurrentPage,
  parPage,
  showItems,
}) => {
  let totalPages = Math.ceil(pageNumber / parPage);
  let startPage = currentPage;

  let dif = totalPages - currentPage;

  if (dif <= showItems) {
    startPage = totalPages - showItems;
  }
  let endPage = startPage < 0 ? showItems : showItems + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }
  const createButton = () => {
    let btns = [];
    for (let i = startPage; i <= endPage; i++) {
      btns.push(
        <li
          className={`${
            currentPage === i
              ? " bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
              : " bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 hover:text-white"
          } w-[2.0625rem] h-[2.0625rem] rounded-full flex justify-center items-center cursor-pointer text-[#d0d2d6] `}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </li>
      );
    }
    return btns;
  };
  return (
    <ul className="flex justify-end items-center gap-3 ">
      {currentPage > 1 && (
        <li
          onClick={() => setCurrentPage((prevPageNum) => prevPageNum - 1)}
          className=" bg-slate-700 w-[2.0625rem] h-[2.0625rem] rounded-full flex justify-center items-center cursor-pointer text-[#d0d2d6]   "
        >
          <BsChevronDoubleLeft />
        </li>
      )}
      {createButton()}
      {totalPages !== currentPage && (
        <li
          onClick={() => setCurrentPage((prevPageNum) => prevPageNum + 1)}
          className=" bg-slate-700 w-[2.0625rem] h-[2.0625rem] rounded-full flex justify-center items-center cursor-pointer text-[#d0d2d6]   "
        >
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;