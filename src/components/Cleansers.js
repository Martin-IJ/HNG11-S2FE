import React from "react";
import { Cleanser } from "./db";

const Cleansers = () => {
  return (
    <div className="container mx-auto flex justify-between gap-7">
      {Cleanser.map((product) => {
        const { id, image, name, description } = product;
        return (
          <div
            key={id}
            className="relative h-[225px] w-full bg-cover bg-center bg-no-repeat rounded-[10px] hover:shadow-lg hover:shadow-secondary-light"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h4 className="absolute top-3 left-3 bg-white px-3 rounded-md border border-tertiary shadow shadow-black/50">
              {name}
            </h4>
            <p className="absolute bottom-3 right-3 bg-white px-3 rounded-md border border-tertiary shadow shadow-black/50">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cleansers;
