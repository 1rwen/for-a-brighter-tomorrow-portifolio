import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Adam1 from '../assets/Adam-1.webp'
import Adam2 from '../assets/Adam-2.webp'
import Adam3 from '../assets/Adam-3.webp'
import Adam4 from '../assets/Adam-4.webp'
import Adam5 from '../assets/Adam-5.webp'



import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import Page from "../components/page";


function Adam() {
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
          <img src={Adam2} className="mx-auto" width={1600} height={1067}/>
          <img src={Adam3} className="mx-auto" width={1600} height={1067}/>  
          <img src={Adam5} className="mx-auto" width={1600} height={1067}/> 
          <img src={Adam4} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Adam
