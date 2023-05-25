import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="h-1/3"></div>
      <div className="justify-center flex h1/3">
        <div className="border-8 p-16 rounded-full softshadow ">
          Hello Index
        </div>
      </div>
      <div className="h-1/3"></div>
    </div>
  );
};

export default Home;
