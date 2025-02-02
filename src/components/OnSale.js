import React, { useState } from "react";
import { NewProduct } from "./db";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const OnSale = () => {
  const [productCounts, setProductCounts] = useState(
    NewProduct.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const [favoriteStatus, setFavoriteStatus] = useState(
    NewProduct.reduce((acc, product) => {
      acc[product.id] = false;
      return acc;
    }, {})
  );

  const increaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decreaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
    }));
  };

  const toggleFavorite = (id) => {
    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  return (
    <div className="container mx-auto px-2 w-screen">
      <h3 className="h3 text-[29px] mb-5">On Sales</h3>
      <div className="overflow-x-auto hide-scrollbar w-full">
        <div className="flex gap-3 md:gap-5 w-full">
          {NewProduct.map((product) => {
            const { id, image, name, price } = product;
            return (
              <div
                key={id}
                className="group relative w-[48%] md:w-[210px] flex-shrink-0 lg:flex-shrink p-3 bg-white border-2 border-secondary-extraLight hover:border-secondary-light"
              >
                <div
                  className="absolute top-5 right-5"
                  onClick={() => toggleFavorite(id)}
                >
                  {favoriteStatus[id] ? (
                    <button>
                      <FaHeart className="text-red-500" />
                    </button>
                  ) : (
                    <button>
                      <FaRegHeart />
                    </button>
                  )}
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
                      <button onClick={() => decreaseCount(id)}>-</button>
                      <p>{productCounts[id]}</p>
                      <button onClick={() => increaseCount(id)}>+</button>
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
      </div>
    </div>
  );
};

export default OnSale;
