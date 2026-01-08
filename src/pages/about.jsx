import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
// import { div } from "framer-motion/client";import { IoArrowBackOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function about() {
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
        <div className="flex justify-center items-center w-[130px] lg:w-[150px] ">
        </div>
        <div className="w-[50%] lg:w-[30%] mt-[30px]">
          <div
            className="w-[100%] text-xs"
            alt="about-description"
          >
            <span className="underline font-medium"> info </span> <br></br>
            Randall Nguyen resides in Southern California (Inland Empire) and his work focuses on primarily photography but has experience in video editing and wants to get into directing. 

          </div>
          <div
            alt="tag"
            className="flex justify-center font-medium text-xs mt-[30px] lg:mt-[30px]"
          >
            for inquiries, veryfirstlife@gmail.com or direct message on instagram
          </div>
          <div className="flex justify-center m-[50px] cursor-pointer hover:opacity-70">
            <a href="https://www.instagram.com/everything1everwanted/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;