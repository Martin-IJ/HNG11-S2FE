import React from "react";
import logo from "../assets/Frame 9.svg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="border-b border-primary-dark">
        <div className="container mx-auto px-2 py-5 flex items-center justify-between">
          <div className="hidden flex-1 lg:flex items-center">
            <div className="max-w-[250px] w-full flex items-center bg-primary-light border border-primary-dark px-3 py-1 rounded-[20px]">
              <input
                type="text"
                className="w-full bg-transparent outline-none text-sm"
                placeholder="Find your product"
              />
              <IoSearch />
            </div>
          </div>

          <div className="flex-1 flex lg:hidden gap-2 text-2xl items-center">
            <GiHamburgerMenu />
            <IoSearch />
          </div>

          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" />
          </div>

          <div className="flex-1 flex lg:hidden justify-end gap-2 lg:gap-7 text-2xl lg:text-lg">
            <FaRegUser />
            <div className="flex items-center">
              <MdOutlineShoppingCart />
              <div className="h-[15px] w-[15px] flex items-center justify-center text-[8px] bg-secondary-extraLight rounded-full">
                0
              </div>
            </div>
          </div>

          {/* Desktop navbar */}
          <div className="flex-1 hidden lg:flex justify-end gap-2 lg:gap-7 text-2xl lg:text-lg">
            <FaRegUser />
            <FaRegHeart />
            <div className="flex items-center">
              <MdOutlineShoppingCart />
              <div className="h-[15px] w-[15px] flex items-center justify-center text-[8px] bg-secondary-extraLight rounded-full">
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex border-b border-primary-dark">
        <ul className="container mx-auto px-2 flex justify-between py-2 text-sm">
          <li>Brands</li>
          <li>Home</li>
          <li>Gift Cards</li>
          <li>Book a consultation</li>
          <li>Gift Cards</li>
          <li>Best & New</li>
          <li>Wholesale</li>
          <li>Categories <FaAngleDown /></li>
          <li>Sales & Offers</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
