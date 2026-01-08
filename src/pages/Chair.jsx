import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import willa1 from '../assets/121825-1.webp'
import willa2 from '../assets/121825-2.webp'
import willa3 from '../assets/121825-3.webp'
import willa4 from '../assets/121825-4.webp'
import willa5 from '../assets/121825-5.webp'
import willa6 from '../assets/121825-6.webp'
import willa7 from '../assets/121825-7.webp'
import willa8 from '../assets/121825-8.webp'

import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import { Page } from "../components/Page";

function Chair() {
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
          <img src={willa5} className="mx-auto" width={1600} height={1067}/> 
          <img src={willa2} className="mx-auto" width={1600} height={1067}/>
          <img src={willa8} className="mx-auto" width={1600} height={1067}/>  
          <img src={willa1} className="mx-auto" width={1600} height={1067}/> 
          <img src={willa6} className="mx-auto" width={1600} height={1067}/> 
          <img src={willa7} className="mx-auto" width={1600} height={1067}/> 
          <img src={willa4} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Chair
