import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import auroralouis1 from '../assets/auroralouis-1.webp'
import auroralouis2 from '../assets/auroralouis-2.webp'
import auroralouis3 from '../assets/auroralouis-3.webp'
import auroralouis4 from '../assets/auroralouis-4.webp'
import auroralouis5 from '../assets/auroralouis-5.webp'
import auroralouis6 from '../assets/auroralouis-6.webp'

import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import Page from "../components/page";


function Auroralouis() {
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
          <img src={auroralouis2} className="mx-auto" width={1600} height={1067}/>
          <img src={auroralouis6} className="mx-auto" width={1600} height={1067}/>
          <img src={auroralouis3} className="mx-auto" width={1600} height={1067}/>  
          <img src={auroralouis4} className="mx-auto" width={1600} height={1067}/> 
          <img src={auroralouis5} className="mx-auto" width={1600} height={1067}/> 
          <img src={auroralouis1} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Auroralouis
