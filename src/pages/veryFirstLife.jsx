
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
        <div className="w-[50%] lg:w-[40%] ">
          <div
            className="w-[100%] text-xs  "
            alt="about-description"
          >
            <span className="underline font-medium"> what is veryFirstLife? </span> <br></br>
                veryFirstLife is Randall's personal and hopefully a lifelong project. A space where all of his work lives, primarily consisting of photographs, writing, video recordings, and whatever other forms of expression emerge over time. It’s often been difficult for him to explain exactly what veryFirstLife is, but with time, that description has become clearer.

                At its core, veryFirstLife is an extension of Randall’s lived experience. It shifts and adapts alongside whatever season of life he’s currently in. There is no fixed destination or end goal, only a commitment to creating work that is honest, intentional, and true. A space for expression that belongs fully to him, and one that he hopes may someday resonate with others as much as it does with himself.

                
                <div className="flex justify-center items-center m-[30px] font-medium">
                  "Very first time living, very first time here."
                </div>


          <div className="flex justify-center items-center w-full">
            <SoundCloud />
          </div>
          
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center w-full">
            <LoopingImages />
        </div>
        
    </div>
  );
}

export default Life;