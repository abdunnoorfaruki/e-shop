import { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// custome and reusable components
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/ui/button";
import Rating from "../../components/ratings";
import Products from "../../components/products";
import Select from "../../components/shared/select";
// react-icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
// third-party libraries
import { Range } from "react-range";
import { FaThList } from "react-icons/fa";
import ShopProducts from "../../components/shop-products";
import Pagination from "../../components/pagination";

// TODO: You have to make the bredcum reusable compenent like "home > product > shopping"
const sortSelectOptions = [
  {
    text: "sort low to high",
    value: "sort low to high",
  },
  {
    text: "sort high to low",
    value: "sort high to low",
  },
];
const Shop = () => {
  const [filter, setFilter] = useState(true);
  const [categories] = useState([
    "Cloths",
    "Sports",
    "Electronics",
    "Laptops",
    "Mobiles",
    "Headphones",
    "Monitor",
  ]);
  const [styles, setStyles] = useState("grid");
  const [state, setState] = useState({ values: [50, 2000] });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber] = useState(50);
  const [parPage] = useState(5);
  return (
    <div>
      <Header />

      {/* Shop Banner */}
      <section className="bg-[url('http://localhost:3000/images/banner/shop.gif')] h-[220px] bg-no-repeat bg-cover bg-left mt-6 relative ">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex justify-center items-center flex-col gap-1 w-full h-full text-white">
              <h2 className="text-3xl font-bold">e-shop</h2>
              <div className="flex items-center justify-center gap-2 w-full text-2xl">
                <Link to="/">Home</Link>
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* filter options */}
      <section className="py-16">
        <div className="w-[85%] md:w-[90%] lg:w-[90%] sm:w-[90%] mx-auto ">
          <div className={`md:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            {/* button container start */}
            <div className="w-full">
              <Button
                btnTxt="filter product"
                btnHandler={() => setFilter(!filter)}
              />
            </div>
            {/* button container end */}
          </div>

          <div className="w-full flex flex-wrap">
            {/* filter options start */}
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${
                filter
                  ? "md:h-0 md:overflow-hidden md:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              } transition-all duration-200 `}
            >
              <h2 className="text-3xl font-bold text-slate-600 mb-3">
                Category
              </h2>

              {/* filter with category start */}
              <div className="py-2">
                <ul>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex justify-start items-center gap-1 py-1"
                    >
                      <input type="checkbox" id={category} />
                      <label
                        className="text-slate-600 block cursor-pointer"
                        htmlFor={category}
                      >
                        {" "}
                        {category}{" "}
                      </label>
                    </div>
                  ))}
                </ul>
              </div>
              {/* filter with category end */}

              {/* filter with price range start */}
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl font-bold text-slate-600 mb-3">
                  Price
                </h2>
                <div className="pl-2">
                  <Range
                    step={5}
                    min={50}
                    max={2000}
                    values={state.values}
                    onChange={(values) => setState({ values })}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="w-full h-[6px] rounded-full cursor-default bg-slate-200"
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="w-[15px] h-[16px] rounded-full bg-blue-500 "
                      />
                    )}
                  />
                </div>
                <div>
                  <span className="text-red-500 font-bold text-lg">
                    {" "}
                    ${Math.floor(state.values[0])}-${state.values[1]}{" "}
                  </span>
                </div>
              </div>
              {/* filter with price range end */}

              {/* filter by ratings start */}
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl font-bold text-slate-600 mb-3">
                  Rating
                </h2>
                <ul className="flex flex-col gap-2">
                  <Rating ratings={5} />
                  <Rating ratings={4.5} />
                  <Rating ratings={4} />
                  <Rating ratings={3.5} />
                  <Rating ratings={3} />
                  <Rating ratings={2.5} />
                  <Rating ratings={2} />
                  <Rating ratings={1.5} />
                  <Rating ratings={1} />
                  <Rating ratings={0} />
                </ul>
              </div>
              {/* filter by ratings end */}
              <div className="py-2 flex flex-col gap-5 md:hidden">
                <Products title={"Latest Products"} />
              </div>
            </div>
            {/* filter options end */}

            <div className="w-9/12 md-lg:w-8/12 md:w-full ">
              {/*product sort option start  */}
              <div className="pl-8 md:pl-0">
                <div className="py-4 px-3 mb-10 bg-white rounded-md border flex justify-between items-center">
                  <h2 className="text-lg text-slate-600 font-medium">
                    100 Products
                  </h2>
                  <div className="flex justify-between items-center gap-2">
                    {/* select option for sort products */}
                    <Select options={sortSelectOptions} />

                    <div className="flex justify-center items-start gap-4 md-lg:hidden">
                      {/* list view icon  */}
                      <div
                        onClick={() => setStyles("grid")}
                        className={`p-2 ${
                          styles === "grid" && "bg-slate-300"
                        } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <BsFillGridFill />
                      </div>
                      {/* list view icon */}
                      <div
                        onClick={() => setStyles("list")}
                        className={`p-2 ${
                          styles === "list" && "bg-slate-300"
                        } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <FaThList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*product sort option end  */}

              {/* products container start */}
              <div className="pb-d pl-8">
                <ShopProducts styles={styles} />
              </div>
              {/* products container end */}

              {/* Pagination start */}
              <div className="py-5" >
                <Pagination
                  showItems={5}
                  pageNumber={pageNumber}
                  parPage={parPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              {/* Pagination end */}
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Shop;
