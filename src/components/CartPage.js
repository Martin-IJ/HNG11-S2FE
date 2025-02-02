import React, { useState } from "react";
import image from "../assets/cart product.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartPage = () => {
  const initialProducts = [
    {
      id: 0,
      name: "Product",
      price: "Price",
      subtotal: "Subtotal",
      count: "Quantity",
    },
    {
      id: 1,
      name: "Olay Vitamin C Brightening Body Lotion 502ML",
      price: 33000,
      subtotal: 33000,
      count: 1,
    },
    {
      id: 2,
      name: "Olay Vitamin C Brightening Body Lotion 502ML",
      price: 33000,
      subtotal: 66000,
      count: 2,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const increaseCount = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count + 1,
              subtotal: (product.count + 1) * product.price,
            }
          : product
      )
    );
  };

  const decreaseCount = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 1
          ? {
              ...product,
              count: product.count - 1,
              subtotal: (product.count - 1) * product.price,
            }
          : product
      )
    );
  };

  const total = products.reduce(
    (acc, product) =>
      acc + (typeof product.subtotal === "number" ? product.subtotal : 0),
    0
  );

  const firstProduct = products[0];
  const completeProduct = products.slice(1);

  return (
    // <div className="container mx-auto px-2 py-10">
    //   <p className="h3 mb-10">Cart</p>

    //   <table className="table-auto w-full">
    //     <thead>
    //       <tr className="bg-primary-fair">
    //         <th className="h8 font-normal text-start p-5">PRODUCT</th>
    //         <th className="h8 font-normal text-start pl-5">PRICE</th>
    //         <th className="h8 font-normal text-center">QUANTITY</th>
    //         <th className="h8 font-normal text-end p-5">SUBTOTAL</th>
    //       </tr>
    //     </thead>
    //     <tbody className="divide-y divide-black/20">
    //       {initialProducts.map((product) => {
    //         const { id, name, price, count, subtotal } = product;
    //         return (
    //           <tr key={id}>
    //             <td className="flex items-center h7 p-5">
    //               <img src={image} alt="" className="mr-3" /> {name}
    //             </td>
    //             <td className="text-start pl-5 h7">₦{price.toLocaleString()}</td>
    //             <td className="text-end h7">
    //               <div className="flex items-center justify-end gap-2 px-2 py-1 border border-black/20 w-fit mx-auto h8">
    //                 <button
    //                   className={`${
    //                     count === 1 ? "text-black/20" : "text-tertiary"
    //                   }`}
    //                 >
    //                   -
    //                 </button>
    //                 <p className="h7">{count}</p>
    //                 <button className="text-tertiary">+</button>
    //               </div>
    //             </td>
    //             <td className="h7 text-end pr-5">₦{subtotal.toLocaleString()}</td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //     <tbody className="bg-primary-fair w-fit">
    //       <tr>
    //         <td className="bg-primary-light"></td>
    //         <td className="h7 text-start pl-5 font-semibold">Total</td>
    //         <td></td>
    //         <td className="h7 text-end p-5">₦{total.toLocaleString()}</td>
    //       </tr>
    //     </tbody>
    //   </table>

    //   <div className="flex justify-end mt-5">
    //     <button className="light-green-btn">PROCEED TO CHECKOUT <FaArrowRightLong /></button>
    //   </div>
    // </div>

    <div className="container mx-auto px-2 py-10">
      <p className="h3 md:mb-10">Cart</p>

      <div>
        <div
          key={firstProduct.id}
          className="h8 hidden md:flex justify-between bg-primary-fair p-5"
        >
          <p className="w-[60%]">{firstProduct.name}</p>
          <div className="w-[40%] flex justify-between">
            <p>{firstProduct.price}</p>
            <p>{firstProduct.count}</p>
            <p>{firstProduct.subtotal}</p>
          </div>
        </div>

        {completeProduct.map((product) => {
          const { id, name, price, count, subtotal } = product;
          return (
            <div
              key={id}
              className="h7 md:flex justify-between items-center py-5 pr-5 border-t md:border-t-0 even:border-t-0 md:border-b border-black/20"
            >
              <div className="md:w-[60%] flex gap-5 md:gap-0 items-center">
                <img src={image} alt="" className="mr-2" />
                {name}
              </div>

              <div className="md:w-[40%] flex justify-between mt-5 md:mt-0">
                <div className="flex md:hidden flex-col gap-4">
                  <p>Price:</p>
                  <p>Quantity</p>
                  <p>Subtotal:</p>
                </div>
                <div className="md:w-full text-end md:text-start md:flex justify-between space-y-3 md:space-y-0">
                  <p>₦{price}</p>
                  <div className="flex items-center justify-end gap-2 px-2 py-1 border border-black/20 w-fit md:mx-auto h8">
                    <button
                      className={`${
                        count === 1 ? "text-black/20" : "text-tertiary"
                      }`}
                      onClick={() => decreaseCount(id)}
                      disabled={count === 1}
                    >
                      -
                    </button>
                    <p className="h7">{count}</p>
                    <button
                      className="text-tertiary"
                      onClick={() => increaseCount(id)}
                    >
                      +
                    </button>
                  </div>
                  <p>₦{subtotal.toLocaleString()}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex md:justify-end mt-5 w-full">
          <div className="flex flex-col items-center gap-5 border-t md:border-t-0 border-black/20 w-full md:w-[42%]">
            <div className="md:bg-primary-fair h8 md:border md:rounded flex justify-between p-5 w-full">
              <p>TOTAL</p>
              <p>₦{total.toLocaleString()}</p>
            </div>

            <Link
              to="/checkout"
              className="light-green-btn flex items-center w-[90%]"
            >
              <button className="flex items-center gap-1">
                PROCEED TO CHECKOUT <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
