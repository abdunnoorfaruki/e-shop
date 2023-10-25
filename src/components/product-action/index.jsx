/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductAction = ({ Icon, to }) => {
  return (
    <>
      {!to && (
        <li className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-white hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all duration-300 ">
          <Icon size={20} />
        </li>
      )}
      {to && (
         <Link to={to} className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-white hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all duration-300 ">
         <Icon size={20} />
       </Link>
      )}
    </>
  );
};

export default ProductAction;
