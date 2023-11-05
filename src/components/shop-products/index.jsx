/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import ShopProductCard from "../productsCard/ShopProductCard";

const ShopProducts = ({ styles }) => {
  const [productActions] = useState([
    { icon: AiFillHeart },
    { icon: FaEye, to: "#" },
    { icon: AiOutlineShoppingCart },
  ]);
  const [products] = useState([1, 2, 3, 4, 5, 6])
  return (
    <div
      className={`grid ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-3`}
    >
      {products.map((product) => (
        <ShopProductCard
          key={product}
          styles={styles}
          name={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ratione consequuntur."
          }
          price={450}
          img={`http://localhost:3000/images/products/${product}.webp`}
          actions={productActions}
          ratings={4.5}
        />
      ))}
    </div>
  );
};

export default ShopProducts;
