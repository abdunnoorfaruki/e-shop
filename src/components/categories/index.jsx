import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {lazy, useState } from "react";
const Carousel = lazy(() => import("react-multi-carousel"));
const Categories = () => {
  const [categories] = useState([
    "Clothing",
    "Sports",
    "Mobiles",
    "Laptops",
    "Monitors",
    "Electronich",
  ]);

  // responsive options for carousel
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mdtablet: {
        breakpoint: { max: 991, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 3
    },
    smmobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 440, min: 0 },
        items: 1
    }
}
  return (
    <div className="w-[87%] mx-auto my-4">
      <Carousel
        autoPlay={true}
        arrows={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="md-lg:invisible"
        transitionDuration={500}
      >
        {categories.map((category, i) => (
          <Link to="#" className="border  h-[185px] block " key={category}>
            <div className="w-full h-full relative">
              <img
              className="w-full"
                src={`http://localhost:3000/images/products/${i + 1}.webp`}
                alt={category}
              />
              <div className="absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center">
                <span className="py-[2px] px-6 bg-[#3330305d] text-white">
                  {category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
