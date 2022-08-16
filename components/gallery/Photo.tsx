import React from "react";
import Image from "next/image";

type TPhoto = {
  source: string;
};

const Photo = () => {
  return (
    <div className="">
      <Image className="" src="https://unsplash.it/600/400?image=501" alt="test" width={150} height={150} />;
    </div>
  );
};

export default Photo;
// https://stackoverflow.com/questions/69833361/tailwindcss-set-flex-child-width-to-fill-up-whole-parent-width
