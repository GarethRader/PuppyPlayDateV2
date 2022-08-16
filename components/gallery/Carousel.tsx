import React from "react";
import Photo from "./Photo";
const Carousel = () => {
  return (
    <div className=" justify-center">
      <div className="grid grid-cols-8">
        {[...Array<number>(20)].map((i, idx) => (
          <div className="border-5 border-gray-300" key={idx}>
            <Photo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
