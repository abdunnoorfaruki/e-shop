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
  py,
  px,
  shadow
}) => {
  return (
    <>
      {to && (
        <Link
          to={to}
          className={`h-full w-full ${bg ? bg : "bg-indigo-500"} ${
            color ? color : "text-white"
          } uppercase ${px ? px : "px-3"} font-bold ${
            size ? size : "text-sm"
          } ${rounded ? rounded : "rounded-none"} ${py ? py : "py-2"} ${shadow} `}
        >
          {" "}
          {btnTxt}
        </Link>
      )}
      {!to && (
        <button
          className={`h-full w-full ${bg ? bg : "bg-indigo-500"} ${
            color ? color : "text-white"
          } uppercase  font-bold ${size ? size : "text-sm"}  ${
            rounded ? rounded : "rounded-none"
          } ${px ? px : "px-3"} ${py ? py : "py-2"}`}
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
