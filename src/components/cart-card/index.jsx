/* eslint-disable react/prop-types */

import Button from "../ui/button";
import IncDecButton from "../ui/inc-dec-button";

const CartCard = ({ image, name, brand, price, discount, quantity }) => {
  return (
    <div className="w-full flex flex-wrap cursor-pointer py-2 ">
      <div className="flex sm:w-full gap-2 w-7/12">
        <div className="w-full flex gap-2 sm:flex-wrap sm:justify-center justify-start items-center">
          <div className="w-[150px] sm:-[120px]  h-[80px] flex justify-center items-center p-1 ">
            <img
              className="h-full  object-cover"
              src={image}
              alt="product image"
            />
          </div>
          <div className="pr-4 text-slate-600">
            <h2 className="text-md">{name}</h2>
            <span className="text-sm">Brand : {brand}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
        <div className="pl-4 sm:pl-0">
          <h2 className="text-lg text-orange-500">
            ${price - Math.floor((price * discount) / 100)}
          </h2>
          <p className="line-through">{price}</p>
          <p>-${discount}%</p>
        </div>
        <div className="flex gap-2 flex-col">
         <IncDecButton quantity={quantity}  />
          <div className="h-[30px]">
            <Button
              btnTxt={"Delete"}
              bg={"bg-red-500"}
              color={"text-white"}
              py={"py-[3px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
