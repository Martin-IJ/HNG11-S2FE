import React from "react";
import NewArrival from "./NewArrival";
import BestSellers from "./BestSellers";
import Cleansers from "./Cleansers";
import OnSale from "./OnSale";
import Offer from "./Offer";

const Home = () => {
  return (
    <div>
      <div className="hero-banner bg-cover md:bg-center bg-no-repeat h-[430px]">
        <div className="container mx-auto flex items-center h-full px-2">
          <div className="w-[280px]">
            <h2 className="text-[42px] leading-none">
              Your Daily Dose Of Glow
            </h2>
            <p className="text-[24px] mt-3 mb-5">We care about your skin</p>
            <button className="green-btn">BOOK A CONSULTATION</button>
          </div>
        </div>
      </div>

      <div className="my-20 space-y-14">
        <NewArrival />
        <BestSellers />
        <Cleansers />
        <OnSale />
      </div>
      <Offer />
    </div>
  );
};

export default Home;
