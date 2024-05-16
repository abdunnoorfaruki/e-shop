import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
const Carousel = lazy(() => import("react-multi-carousel"));

const baseUrl = import.meta.env.VITE_BASE_URL

const Banner = () => {
  const [banners] = useState([1, 2, 3, 4, 5, 6, 7]);

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
  return (
    <div className="w-full md-lg:mt-6">
      <div className="w-[85%] lg:w-[90%] mx-auto ">
        <div className="flex flex-wrap w-full md-lg:gap-8">
          <div className="w-full">
            <div className="my-2">
              <Suspense fallback="loading...">
                <Carousel
                  autoPlay={true}
                  arrows={true}
                  showDots={true}
                  responsive={responsive}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="md-lg:invisible"

                >
                  {banners.map((img, i) => (
                    <Link
                      to="#"
                      key={i}
                      className="w-full h-auto md-lg:h-[400px] block"
                    >
                      <img
                        src={`${baseUrl}/images/banner/${img}.jpg`}
                        alt="banner image"
                      />
                    </Link>
                  ))}
                </Carousel>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
