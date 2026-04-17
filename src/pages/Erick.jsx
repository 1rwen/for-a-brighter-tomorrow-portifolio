import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import erick1 from '../assets/erickmarch.webp'
import erick2 from '../assets/erickmarch-2.webp'
import erick3 from '../assets/erickmarch-3.webp'
import erick4 from '../assets/erickmarch-4.webp'
import erick5 from '../assets/erickmarch-5.webp'
import erick6 from '../assets/erickmarch-6.webp'
import erick7 from '../assets/erickmarch-7.jpg'
import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import Page from "../components/page";


function Erick() {
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
          <img src={erick1} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick5} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick6} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick4} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick3} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick2} className="mx-auto" width={1600} height={1067}/> 
          <img src={erick7} className="mx-auto" width={1600} height={1067}/> 
         
        </div>
      </div>
    </Page>
  )
}

export default Erick
