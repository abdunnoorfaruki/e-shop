// react-router-dom
import { Link } from "react-router-dom";
// Custome & reusable components
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// react-icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import CartCard from "../../components/cart-card";
import InputGroup from "../../components/shared/input-group";
import Button from "../../components/ui/button";
const Cart = () => {
  const [cart_products] = useState(10);
  const [outofstock_products] = useState(2);
  return (
    <div>
      <Header />
      {/* Cart banner section start */}
      <section className='bg-[url("http://localhost:3000/images/banner/card.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">E-Shop</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart banner section start */}
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90] mx-auto py-16">
          {cart_products > 0 || outofstock_products > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4">
                      <h2 className="text-md text-green-500 font-semibold">
                        Stock Products {cart_products}
                      </h2>
                    </div>
                    {
                      <div className="flex bg-white p-4 flex-col gap-2">
                        <div className="flex justify-start items-center">
                          <h2 className="text-md text-slate-600">
                            ZamZam Shop
                          </h2>
                        </div>
                        <CartCard
                          image={"http://localhost:3000/images/products/1.webp"}
                          name={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?"
                          }
                          brand={"Apple"}
                          price={2000}
                          discount={10}
                          quantity={1}
                        />
                        <CartCard
                          image={"http://localhost:3000/images/products/2.webp"}
                          name={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?"
                          }
                          brand={"Apple"}
                          price={2000}
                          discount={10}
                          quantity={1}
                        />
                        <CartCard
                          image={"http://localhost:3000/images/products/3.webp"}
                          name={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?"
                          }
                          brand={"Apple"}
                          price={2000}
                          discount={10}
                          quantity={1}
                        />
                      </div>
                    }
                    {outofstock_products > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4">
                          <h2 className="text-md text-red-500 font-semibold">
                            Out of Stock {outofstock_products}
                          </h2>
                          <CartCard
                            image={
                              "http://localhost:3000/images/products/4.webp"
                            }
                            name={
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?"
                            }
                            brand={"Apple"}
                            price={2000}
                            discount={10}
                            quantity={1}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                  {cart_products > 0 && (
                    <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex justify-between items-center">
                        <span>5 Item</span>
                        <span>$1200</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shipping Fee</span>
                        <span>$10</span>
                      </div>
                      <div className="flex gap-2">
                        <InputGroup
                          type={"text"}
                          placeholder={"Input Vauchar Coupon"}
                          rounded={"rounded-sm"}
                          
                        />
                        <div className="h-[41px]">
                          <Button
                            btnTxt="Apply"
                            bg={"bg-blue-500"}
                            color={"text-white"}
                            py={"py-[1px]"}
                            rounded={"rounded-sm"}
                        
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span className="text-lg text-orange-500">
                          ${1200 + 10}
                        </span>
                      </div>
                      <Button btnTxt={"Proceed to checkout"} px={"px-5"} py={"py-[6px] "} rounded={"rounded-sm"}  bg={"bg-orange-500"} shadow={"hover:shadow-orange-500/20 hover:shadow-lg"}  />
                      
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-indigo-500 text-white" to="/shops">
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
