
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { LoopingImages } from "./loopingImages";
import SoundCloud from "../components/SoundCloud";
// import { div } from "framer-motion/client";

function Life() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen flex-grow">
        <div className="fixed top-0 left-0 p-4 z-50 font-black"> 
            <Link to="/">
            <p className="flex items-center gap-2 text-sm font-thin hover:underline cursor-pointer">
                <IoArrowBackOutline />
                back
            </p>
            </Link>
        </div>
        <div className="flex justify-center items-center w-[130px] lg:w-[140px] ">
        </div>
        <div className="w-[50%] lg:w-[40%] mt-[200px]">
          <div
            className="w-[100%] text-xs  "
            alt="about-description"
          >
            <span className="underline font-medium"> what is veryFirstLife? </span> <br></br>
                veryFirstLife is an external entity that is a memoir of Randall Nguyen's very first time living this thing we call life. It is a multi-facet project such that it has no restrictions and can be anything he wants but primarily focuses on photography, writing, memory recordings, and hopefully much more. He doesn’t quite know what it is and sometimes has a hard time understanding and explaining but that’s the beauty of it, not having limits to holding on what is truly yours. One of the key components of this project is capturing different parts of Randall’s life using a few words that describes how he felt during that time. Some examples are “finally-made-it-to-tomorrow”, “everything-we-ever-wanted”, and “running-away-for-a-better-tomorrow”. There is no end goal to this project but more so an excuse to encapsulate something concrete and honest.
          <div className="flex justify-center items-center w-full mt-[80px] lg:-mt-[80px]">
            <SoundCloud />
          </div>
          
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center w-full mt-[100px] md:mt-[0px]">
            <LoopingImages />
        </div>
        
    </div>
  );
}

export default Life;