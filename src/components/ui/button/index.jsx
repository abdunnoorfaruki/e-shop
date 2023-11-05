/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({
  btnTxt,
  type,
  btnHandler,
  IconLoading,
  isLoading,
  to,
  isDisabled,
  bg,
  size,
  color,
  rounded,
}) => {
  return (
    <>
      {to && (
        <Link
          to={to}
          className={`h-full w-full ${bg ? bg : "bg-indigo-500"} ${
            color ? color : "text-white"
          } uppercase px-4 font-bold ${size ? size : "text-sm"} ${
            rounded ? rounded : "rounded-none"
          } py-2 px-3 `}
        >
          {" "}
          {btnTxt}
        </Link>
      )}
      {!to && (
        <button
          className={`h-full w-full ${bg ? bg : "bg-indigo-500"} ${
            color ? color : "text-white"
          } uppercase px-4 font-bold ${size ? size : "text-sm"}  ${
            rounded ? rounded : "rounded-none"
          } py-2 px-3`}
          type={type ? type : "button"}
          disabled={isLoading || isDisabled}
          onClick={btnHandler}
        >
          {isLoading ? IconLoading : btnTxt}
        </button>
      )}
    </>
  );
};

export default Button;
