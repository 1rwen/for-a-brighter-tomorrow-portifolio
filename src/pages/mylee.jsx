import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mylee1 from '../assets/my04-1.webp'
import mylee2 from '../assets/my04-2.webp'
import mylee3 from '../assets/my04-3.webp'
import mylee4 from '../assets/my04-4.webp'
import mylee5 from '../assets/my04-5.webp'
import mylee6 from '../assets/my04-6.webp'


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
          <img src={mylee1} className="mx-auto" width={1600} height={1067}/> 
          <img src={mylee2} className="mx-auto" width={1600} height={1067}/>
          <img src={mylee3} className="mx-auto" width={1600} height={1067}/>  
          <img src={mylee4} className="mx-auto" width={1600} height={1067}/> 
          <img src={mylee5} className="mx-auto" width={1600} height={1067}/> 
          <img src={mylee6} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Aurora
