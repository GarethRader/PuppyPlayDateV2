import type { NextPage } from "next";
import React from "react";
// import Head from "next/head";
// import Image from "next/image";

const Home: NextPage = () => {
  const Test = 2;
  React.useEffect(() => {
    console.log("test", Test);
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-red-50">
        <div className="text-3xl font-bold">Website title</div>
        <button
          onClick={() => {
            console.log("poop");
          }}
        ></button>
      </div>
    </>
  );
};

export default Home;
