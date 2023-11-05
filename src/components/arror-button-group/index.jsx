/* eslint-disable react/prop-types */
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ArrowButtonGroup = ({ next, previous, title }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="sm:text-base text-xl font-bold text-slate-600">{title}</div>
      <div className="flex justify-center items-center gap-3 text-slate-500">
        <button
          onClick={() => previous()}
          className="sm:w-[20px] sm:h-[20px] w-[30px] h-[30px] flex justify-center items-center gap-3 bg-slate-300 border border-slate-200 "
        >
          <span>
            <FaChevronLeft />
          </span>
        </button>
        <button
          onClick={() => next()}
          className="sm:w-[20px] sm:h-[20px] w-[30px] h-[30px] flex justify-center items-center gap-3 bg-slate-300 border border-slate-200 "
        >
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArrowButtonGroup;
