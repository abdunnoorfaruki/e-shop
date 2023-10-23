import { GrMail } from "react-icons/gr";
import { FaFacebook, FaLinkedin, FaList, FaLock, FaUser } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillHeart,
  AiFillShopping,
} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();
  const user = true;
  return (
    <header className="w-full bg-white z-20  ">
      {/* Header top  */}
      <div className="header-top bg-[#eeeeee] md-lg:hidden">
        <div className=" w-[85%] lg:w-[90%] mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center w-full h-[50px] text-slate-500 ">
            {/* Header top left section */}
            <ul className="flex justify-start items-center gap-8">
              <li className="flex justify-between items-center gap-2 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] ">
                <span>
                  <GrMail />
                </span>
                <span>noor1234@gmail.com</span>
              </li>
              <span>Multi vendor ecommerce</span>
            </ul>

            {/* Header top right section */}
            <div className="flex justify-center items-center gap-10">
              <div className="flex items-center justify-center gap-4 ">
                <Link to="#">
                  <FaFacebook />
                </Link>
                <Link to="#">
                  <FaLinkedin />
                </Link>
                <Link to="https://github.com/Webdevnoor01" target="_blank">
                  <AiFillGithub />
                </Link>
                <Link to="#">
                  <AiOutlineTwitter />
                </Link>
              </div>
              <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                <div className="w-[25px]">
                  <img
                    className="w-full"
                    src="../../../images/language.png"
                    alt="language"
                  />
                </div>
                <MdOutlineKeyboardArrowDown size={25} />
                <ul className="absolute invisible transition-all to-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                  <li>English</li>
                  <li>Hindi</li>
                </ul>
              </div>
              {user ? (
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <span>
                    <FaUser />
                  </span>
                  <span className="text-sm font-semibold">Abdun Noor</span>
                </div>
              ) : (
                <Link className="flex justify-center items-center gap-2 cursor-pointer">
                  <span>
                    <FaLock />
                  </span>
                  <span className="text-sm font-semibold">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className="bg-white">
        <div className="w-[85%] md-lg:w-[90%] mx-auto ">
          <div className="w-full flex justify-between items-center flex-wrap h-[80px] md-lg:h-[55px] ">
            <div className=" w-full">
              <div className=" w-full flex justify-between items-center  ">
                {/* Brand */}
                <Link
                  to="/"
                  className="flex justify-center items-center gap-1 min-w-[120px]"
                >
                  <img
                    className="w-[40px]"
                    src="http://localhost:3000/icon.png"
                    alt="eshop"
                  />
                  <span className=" text-[1.5rem] italic font-semibold">
                    e-shop
                  </span>
                </Link>
                {/* Hamburger */}
                <div
                  className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border  border-slate-600 rounded-sm lg:hidden md-lg:flex xl:hidden hidden cursor-pointer "
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>

                {/* menu */}
                <div className="md-lg:w-full w-9/12 md-lg:hidden ">
                  <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                    <ul className="flex justify-start items-center gap-8 md-lg:hidden text-sm font-bold uppercase">
                      <li>
                        <Link
                          to="/"
                          className={`p-2 block ${
                            pathname === "/"
                              ? "text-[#7fad38]"
                              : "text-slate-600"
                          }`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop"
                          className={`p-2 block ${
                            pathname === "/shop"
                              ? "text-[#7fad38]"
                              : "text-slate-600"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className={`p-2 block ${
                            pathname === "/blog"
                              ? "text-[#7fad38]"
                              : "text-slate-600"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className={`p-2 block ${
                            pathname === "/blog"
                              ? "text-[#7fad38]"
                              : "text-slate-600"
                          }`}
                        >
                          About
                        </Link>
                      </li>
                    </ul>

                    <div className="flex md-lg:hidden justify-center items-center gap-5">
                      <div className="flex justify-center gap-5">
                        {/* whislist icon */}
                        <div className="flex justify-center items-center cursor-pointer relative w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                          <span className="text-xl text-red-500">
                            <AiFillHeart />
                          </span>

                          <div className="absolute bg-green-500 text-white text-[10px] w-[18px] h-[18px] flex justify-center items-center rounded-full -top-[3px] -right-[5px] ">
                            5
                          </div>
                        </div>
                        {/* cart icon */}
                        <div className="flex justify-center items-center cursor-pointer relative w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                          <span className="text-xl text-orange-500">
                            <AiFillShopping />
                          </span>
                          <div className="absolute bg-green-500 text-white text-[10px] w-[18px] h-[18px] flex justify-center items-center rounded-full -top-[3px] -right-[5px] ">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive sidebar */}
      <div className="w-full hidden md-lg:block">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "visible" : "invisible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-10 `}
        >
          <div
            className={`w-[300px] z-[9999] fixed duration-200 transition-all ${
              showSidebar ? "left-0" : "-left-[300px]"
            } top-0 overflow-y-auto h-screen py-6 px-8 bg-white rounded-tr-md rounded-br-md `}
          >
            <div className="flex justify-start flex-col gap-6">
              {/* Brand */}
              <Link
                to="/home"
                className="flex justify-center items-center gap-1 min-w-[120px]"
              >
                <img
                  className="w-[40px]"
                  src="http://localhost:3000/icon.png"
                  alt="eshop"
                />
                <span className=" text-[1.5rem] italic font-semibold">
                  e-shop
                </span>
              </Link>

              {/* language setting */}
              <div className="flex justify-star items-center gap-10">
                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute">
                  <div className="w-[25px]">
                    <img
                      className="w-full"
                      src="../../../images/language.png"
                      alt="language"
                    />
                  </div>
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                  <ul className="absolute invisible transition-all to-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>Bangla</li>
                    <li>English</li>
                  </ul>
                </div>
                {/* user profile */}
                {user ? (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                    to="/dashboard"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span>Abdun Noor </span>
                  </Link>
                ) : (
                  <div className="flex cursor-pointer justify-center items-center gap-2 text-sm">
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </div>
                )}
              </div>

              {/* menu */}
              <ul className="flex flex-col justify-start items-start text-md font-semibold uppercase">
                <li>
                  <Link
                    to="/"
                    className={`py-2 block ${
                      pathname === "/" ? "text-[#7fad38]" : "text-slate-600"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={`py-2 block ${
                      pathname === "/shop" ? "text-[#7fad38]" : "text-slate-600"
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`py-2 block ${
                      pathname === "/blog" ? "text-[#7fad38]" : "text-slate-600"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`py-2 block ${
                      pathname === "/blog" ? "text-[#7fad38]" : "text-slate-600"
                    }`}
                  >
                    About
                  </Link>
                </li>
              </ul>

              {/* social links */}
              <div className="flex justify-start items-center gap-10 bottom-10 absolute">
                <div className="flex items-center justify-center gap-4 ">
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                  <Link to="#">
                    <FaLinkedin />
                  </Link>
                  <Link to="https://github.com/Webdevnoor01" target="_blank">
                    <AiFillGithub />
                  </Link>
                  <Link to="#">
                    <AiOutlineTwitter />
                  </Link>
                </div>
              </div>

              {/* footer */}

              <footer className="absolute bottom-2" >
                <p className="font-semibold text-xs text-[#696969]" >&copy; 2023 e-shop, Inc.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
