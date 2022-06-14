import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import ArrowAnimation from "../components/arrowAnimation";
// import Head from "next/head";
import Image from "next/image";
import Hopia1 from "/public/static/img/Hopia1.jpg"

const ArrowHandler = () => {
  // TODO: handle SVG arrow to move page
  console.log("move page");
  return;
};

const Home: NextPage = () => {

  const [CurrentDate, SetCurrentDate] = React.useState<Date | null>(null);
  React.useEffect(() => {
    const Today = new Date().toISOString().slice(0, 10);
    SetCurrentDate(new Date(Today));
  }, []);

  return (
    <div>
      <div className="flex flex-row overflow-hidden">
        <div className=" basis-11/12 h-screen">
          <div className="flex justify-end">
            {/* TODO: change styles of buttons so they're not the same */}
            <button className="bg-sky-500 text-xl px-8 py-3 m-2 font-bold  hover:bg-sky-400 hover:text-white active:bg-cyan-600">
              Sign up
            </button>
            <button className="bg-sky-500 rounded-lg text-xl px-8 py-3 m-2 font-bold  hover:bg-sky-400 hover:text-white active:bg-cyan-600">
              Log in{" "}
            </button>
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="grid">
              <div className="font-bold text-3xl text-center ">
                Hello Pup Lovers!
                <div className="font-normal text-2xl">
                  Welcome to PuppyPlaydate<sup>TM</sup>
                </div>
                {/* TODO: place logo here */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 basis-1/12 h-screen flex justify-center items-center hover:text-white active:text-yellow-500">
          <Link href="#secondPage">
            <a>
              {/* TODO: fix incoming arrow transition (enters with no fade and looks awkward) */}
              <div className="grid ">
                <div className="font-bold text-2xl text-center hover:text-white">Click Here To Learn More</div>
                <ArrowAnimation clickHandler={ArrowHandler} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div id="secondPage" className="flex flex-row overflow-hidden">
        <div className="bg-orange-100 basis-6/12 h-screen">
          <div className="flex h-full justify-left items-center">
            <div className="grid">
              <div className="font-bold text-7xl text-yellow-500 m-20">
                Make a profile for <br></br>your pet.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 basis-5/12 h-screen">
          <div className="flex justify-center items-center h-full">MOCK PROFILE PHOTO HERE</div>
          {/* TODO: add mock profile picture here */}
        </div>
        <div className="bg-green-200 basis-1/12 h-screen flex justify-center items-center hover:text-white active:text-yellow-500">
          <Link href="#thirdPage">
            <a>
              {/* TODO: fix incoming arrow transition (enters with no fade and looks awkward) */}
              <div className="grid ">
                <ArrowAnimation clickHandler={ArrowHandler} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div id="thirdPage" className="flex flex-row overflow-hidden">
        <div className="bg-green-200 basis-6/12 h-screen">
          <div className="flex h-full justify-end items-center">
            <div className="grid">
              <div className="font-bold text-7xl text-green-700 text-right m-20">
                Find other pups<br></br> in your <br></br>community.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 basis-5/12 h-screen">
          <div className="flex justify-center items-center h-full">MOCK PHOTO HERE</div>
          {/* TODO: add mock profile picture here */}
        </div>
        <div className="bg-sky-400 basis-1/12 h-screen flex justify-center items-center hover:text-white active:text-yellow-500">
          <Link href="#fourthPage">
            <a>
              {/* TODO: fix incoming arrow transition (enters with no fade and looks awkward) */}
              <div className="grid ">
                <ArrowAnimation clickHandler={ArrowHandler} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div id="fourthPage" className="flex flex-row overflow-hidden">
        <div className="basis-3/12 bg-sky-400 ">
          <div className="flex h-full justify-left items-start">
            <div className="grid">
              <div className="font-bold text-7xl text-cyan-700 text-center m-20">
                Set up a <br></br>play date...
              </div>
            </div>
          </div>
        </div>
        <div className="basis-5/12 bg-sky-400">
          {/* TODO: insert mock photos here in place of circles  */}
          <div className="grid justify-center rotate-12">
            <Image src={Hopia1} className="object-cover circle border-8 bordered bg-sky-400" width={500} height={500} />
            <Image src={Hopia1} className="object-cover circle border-8 bordered bg-sky-400" width={350} height={350} />
          </div>
        </div>
        <div className="basis-3/12 bg-sky-400 ">
          <div className="flex h-full justify-left items-end">
            <div className="font-bold text-7xl text-cyan-700 text-center m-20">
              ...and the rest is <br></br>history
            </div>
          </div>
        </div>
        <div className="bg-white-200 basis-1/12 h-screen flex justify-center items-center hover:text-white active:text-yellow-500">
          <Link href="#fifthPage">
            <a>
              {/* TODO: fix incoming arrow transition (enters with no fade and looks awkward) */}
              <div className="grid ">
                <ArrowAnimation clickHandler={ArrowHandler} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div id="fifthPage" className="flex flex-row overflow-hidden">
        <div className="h-screen basis-1/4 bg-white"></div>
        {/*Colors used in bg-split: bg-orange-100 bg-green-200 */}
        <div className="h-screen basis-2/4 bg-split-orange-green ">
          {/* TODO: form goes here */}
        </div>
        <div className="h-screen basis-1/4 bg-sky-400"></div>
      </div>
    </div >
  );
};

export default Home;
