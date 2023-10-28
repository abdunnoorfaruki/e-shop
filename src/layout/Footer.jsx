import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import InputGroup from "../components/shared/input-group";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import SocialIcon from "../components/social-icon";

const Footer = () => {
  return (
    <div className="bg-[#f3f6fa]">

      <div className="w-[85%] mx-auto flex flex-wrap border-b pt-5 pb-16 md-lg:pb-10 sm:pb-6">
        {/* footer left sectin which include logo and contact details */}
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex justify-start items-start flex-col gap-3">
            {/* Brand */}
            <Link
              to="/"
              className="flex justify-center items-center gap-1 min-w-[120px]"
            >
              <img
                className="w-[50px]"
                src="http://localhost:3000/icon.png"
                alt="eshop"
              />
              <span className=" text-[1.5rem] italic font-semibold">
                e-shop
              </span>
            </Link>

            <ul className="flex flex-col gap-2 font-semibold text-slate-600">
              <li>Adderess: Chakjama, Islampur, Murshidabad</li>
              <li>email: eshop.support.gmail.com</li>
              <li>phone: 7089765465</li>
            </ul>
          </div>
        </div>

        {/* footer middle section */}
        <div className="w-5/12 lg:w-8/12 sm:w-full ">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div className="">
              <h2 className="font-bold text-lg mb-2">Usefull Links</h2>
              <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className="flex flex-col gap-2 text-sm font-semibold text-slate-600 ">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>About our shop</Link>
                  </li>
                  <li>
                    <Link>Delivery information</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 text-sm font-semibold text-slate-600 ">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>About our shop</Link>
                  </li>
                  <li>
                    <Link>Delivery information</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* footer right section */}
        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="font-bold text-lg mb-2">Join Our</h2>

            <span className="text-sm font-semibold text-slate-600">
              Get Email updates about our latest and shop specials offers
            </span>

            <div className="h-[50px] w-full bg-white border relative">
              <div className="h-full">
                <InputGroup
                  type="text"
                  placeholder="Enter your mail"
                  hFull
                  bdNone
                />
              </div>
              <div className="h-full absolute right-0 top-0">
                <Button type="button" btnTxt="Subscribe" />
              </div>
            </div>

            <ul className="flex justify-start items-center gap-3">
              <SocialIcon to="#" Icon={FaFacebookF} hoverBg={"bg-blue-500"} />
              <SocialIcon
                to="#"
                Icon={AiOutlineTwitter}
                hoverBg={"bg-[#1da1f2]"}
              />
              <SocialIcon to="#" Icon={FaLinkedin} hoverBg={"bg-[#0072b1]"} />
              <SocialIcon to="#" Icon={AiFillGithub} hoverBg={"bg-[#171515]"} />
            </ul>
          </div>
        </div>
      </div>
    {/* copyright section */}
    <div className="w-[85%] mx-auto flex justify-center items-center py-4  font-semibold text-slate-700">
        <p>copyright &copy; 2023, All rights reserved | Made with love 💖 by <a href="https://github.com/Webdevnoor01" target="_black" className="text-blue-500 underline " >Webdevnoor01</a></p>
    </div>
    </div>
  );
};

export default Footer;
