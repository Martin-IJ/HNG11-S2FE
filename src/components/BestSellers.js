import React, { useState } from "react";
import { BestProduct } from "./db";
import { FaRegHeart } from "react-icons/fa";

const BestSellers = () => {
  const [addCount, setAddCount] = useState(1);

  const increaseCount = () => {
    setAddCount(addCount + 1);
  };

  const decreaseCount = () => {
    setAddCount(addCount - 1);
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-[29px] mb-5">Best Sellers</h3>
      <div className="flex gap-5">
        {BestProduct.map((product) => {
          const { id, image, name, price } = product;
          return (
            <div
              key={id}
              className="group relative w-fit p-3 bg-white border-2 border-secondary-extraLight hover:border-secondary-light hover:shadow-lg"
            >
              <div className="absolute top-5 right-5">
                <FaRegHeart />
              </div>
              <div className="w-full flex justify-center">
                <img src={image} alt="" className="text-center" />
              </div>
              <div>
                <p className="my-3 text-[15px]">{name}</p>
                <h5 className="group-hover:hidden text-[14px] font-semibold">
                  ₦{price}
                </h5>

                <div className="hidden group-hover:flex justify-between">
                  <div className="flex gap-2 px-2 py-1 w-fit text-[9px] border border-secondary-dark text-secondary-dark">
                  <button onClick={decreaseCount}>-</button>
                    <p>{addCount}</p>
                    <button onClick={increaseCount}>+</button>
                  </div>
                  <div className="flex gap-2 px-2 py-1 w-fit text-[9px] border border-secondary-dark text-secondary-dark">
                    <button className="uppercase">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="view-all-btn flex mx-auto">View All</button>
    </div>
  );
};

export default BestSellers;
