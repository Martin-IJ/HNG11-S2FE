import React from "react";
import logo from "../assets/Frame 9.svg";
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <div className="bg-secondary-extraLight py-20">
      <div className="container mx-auto md:flex flex-wrap justify-between gap-5 space-y-10 md:space-y-0">
        <div className="max-w-[265px] w-full space-y-5">
          <img src={logo} alt="" />
          <p className="text-[17px]">
            Subscribe to our mailing list to get the new updates{" "}
          </p>
          <div className="flex gap-5">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" className="rounded" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>

        <div>
          <h2 className="text-[29px] mb-5 font-semibold">INFORMATION</h2>
          <ul className="space-y-5">
            <li>About Us</li>
            <li>Contact</li>
            <li>How we source</li>
            <li>Identifying False Products</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[29px] mb-5 font-semibold">OUR SERVICES</h2>
          <ul className="space-y-5">
            <li>Shipping & Delivery</li>
            <li>Refunds & Returns</li>
            <li>Book A Consultation</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[29px] mb-5 font-semibold">MY ACCOUNT</h2>
          <ul className="space-y-5">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
