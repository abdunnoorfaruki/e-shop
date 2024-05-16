import { useState } from "react";
import FeatureProductCard from "../productsCard/FeatureProductCard";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const baseUrl = import.meta.env.VITE_BASE_URL
const FeatureProducts = () => {
  const [products] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [productActions] = useState([
    { icon: AiFillHeart },
    { icon: FaEye, to: "#" },
    { icon: AiOutlineShoppingCart },
  ]);
  return (
    <div className="w-[85%] flex flex-wrap mx-auto py-4">
      {/* Feature porducts header */}
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col relative font-bold text-4xl text-slate-600 pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[100px] h-[4px] mt-4 bg-[#7fad30]"></div>
        </div>
      </div>
      {/* Feature products */}
      <div className="w-full grid gap-4 grid-cols-5 md-lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 ">
        {/* Featuer product card */}
        {products.map((product) => (
          <FeatureProductCard
            key={product}
            image={`${baseUrl}/images/products/${product}.webp`}
            name={"Lorem ipsum dolor sit amet."}
            discount={5}
            price={450}
            ratings={product}
            actions={productActions}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
