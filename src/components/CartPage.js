import React from "react";
import image from "../assets/cart product.svg";

const CartPage = () => {
  const initialProducts = [
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

  return (
    <div className="container mx-auto px-2 py-10">
      <p className="h3 mb-10">Cart</p>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-primary-fair">
            <th className="h8 font-normal text-start p-5">PRODUCT</th>
            <th className="h8 font-normal text-end">PRICE</th>
            <th className="h8 font-normal text-end">QUANTITY</th>
            <th className="h8 font-normal text-end p-5">SUBTOTAL</th>
          </tr>
        </thead>

        {initialProducts.map((product) => {
          const { id, name, price, count, subtotal } = product;
          return (
            <tbody key={id}>
              <tr>
                <td className="flex items-center h7">
                  <img src={image} alt="" /> {name}
                </td>
                <td className="text-end h7">₦{price}</td>
                <td className="mx-auto text-end">
                  <p className="h7 flex gap-2 px-2 w-fit text-[9px] border border-black/20">
                    <button
                      className={`${
                        product.count === 1 ? "text-black/20" : "text-tertiary"
                      }`}
                    >
                      -
                    </button>
                    <p className="h7">{count}</p>
                    <button>+</button>
                  </p>
                </td>
                <td className="h7 text-end pr-5">{subtotal}</td>
              </tr>
            </tbody>
          );
        })}

        <tbody className="bg-primary-fair w-fit">
          <tr>
            <td></td>
            <td className="h7 text-end">Total</td>
            <td></td>
            <td className="h7 text-end pr-5">7654</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
