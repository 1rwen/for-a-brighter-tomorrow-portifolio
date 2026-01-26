import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import aurora1 from '../assets/aurora-1.webp'
import aurora2 from '../assets/aurora-2.webp'
import aurora3 from '../assets/aurora-3.webp'
import aurora4 from '../assets/aurora-4.webp'
import aurora5 from '../assets/aurora-5.webp'
import aurora6 from '../assets/aurora-6.webp'
import aurora7 from '../assets/aurora-7.webp'
import aurora8 from '../assets/aurora-8.webp'



import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import Page from "../components/page";


function Aurora() {
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
          <img src={aurora1} className="mx-auto" width={1600} height={1067}/> 
          <img src={aurora2} className="mx-auto" width={1600} height={1067}/>
          <img src={aurora3} className="mx-auto" width={1600} height={1067}/>  
          <img src={aurora4} className="mx-auto" width={1600} height={1067}/> 
          <img src={aurora5} className="mx-auto" width={1600} height={1067}/> 
          <img src={aurora6} className="mx-auto" width={1600} height={1067}/> 
          <img src={aurora7} className="mx-auto" width={1600} height={1067}/> 
          <img src={aurora8} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Aurora
