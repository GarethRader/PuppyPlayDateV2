import React from "react";
import Carousel from "../components/gallery/Carousel";
import SideBar from "../components/navigation/SideBar";
const Gallery = () => {
  return (
    <div className="justify-center grid grid-cols-6">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-5 p-2">
        <div className="border-8 p-16 rounded-2xl  justify-center flex">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
