/* eslint-disable react/prop-types */
import { useState } from "react";
import Carousel from "react-multi-carousel";
import ArrowButtonGroup from "../arror-button-group";
import LtpProduct from "../ltd-product-card";

// responsive options for carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Products = ({title, showDots}) => {
  const [products] = useState([
    [1, 2, 3],
    [4, 5, 6],
  ]);

  
  return (
    <div className="flex gap-8 flex-col-reverse ">
      <Carousel
        autoPlay={true}
        arrows={false}
        showDots={showDots ? showDots:false}
        responsive={responsive}
        infinite={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<ArrowButtonGroup title={title} />}
      >
        {products.map((productArr, i) => {
          return (
            <div key={i} className="flex flex-col justify-start gap-2 ">
              {productArr.map((product, i) => (
               <LtpProduct key={i} product={product} />
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Products;
