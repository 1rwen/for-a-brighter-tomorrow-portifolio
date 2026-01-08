import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import beach1 from '../assets/121125-4.webp'
import beach2 from '../assets/121125-3.webp'
import beach3 from '../assets/121125-1.webp'
import beach4 from '../assets/121125-2.webp'
import beach5 from '../assets/121125-5.webp'
import Page from "../components/page";



function Beach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <div className="flex flex-col gap-1 max-w-[900px] p-[40px] mx-auto">
        <div className="fixed top-0 left-0 p-4 z-50 font-black"> 
          <Link to="/">
            <p className="flex items-center gap-2 text-sm font-thin hover:underline cursor-pointer">
              <IoArrowBackOutline />
              back
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <img src={beach1} className="mx-auto" width={1600} height={1067} data-fade />
          <img src={beach2} className="mx-auto" width={1600} height={1067} data-fade /> 
          <img src={beach4} className="mx-auto" width={1600} height={1067} data-fade /> 
          <img src={beach3} className="mx-auto" width={1600} height={1067} data-fade /> 
          <img src={beach5} className="mx-auto" width={1600} height={1067} data-fade />  
        </div>
      </div>
    </Page>
  )
}

export default Beach
