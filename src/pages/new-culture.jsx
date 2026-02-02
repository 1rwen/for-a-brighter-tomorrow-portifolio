import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import newcult1 from '../assets/new-1.webp'
import newcult2 from '../assets/new-2.webp'
import newcult3 from '../assets/new-3.webp'
import newcult4 from '../assets/new-4.webp'
import newcult5 from '../assets/new-5.webp'
import newcult6 from '../assets/new-6.webp'
import newcult7 from '../assets/new-7.webp'
import newcult8 from '../assets/new-8.webp'
import newcult9 from '../assets/new-9.webp'
import newcult10 from '../assets/new-10.webp'



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
          <img src={newcult1} className="mx-auto" width={1600} height={1067}/> 
          <img src={newcult4} className="mx-auto" width={1600} height={1067}/> 
          <img src={newcult3} className="mx-auto" width={1600} height={1067}/>  
          <img src={newcult6} className="mx-auto" width={1600} height={1067}/> 
          {/* <img src={newcult7} className="mx-auto" width={1600} height={1067}/>  */}
          {/* <img src={newcult5} className="mx-auto" width={1600} height={1067}/>  */}
          <img src={newcult2} className="mx-auto" width={1600} height={1067}/>
          <img src={newcult8} className="mx-auto" width={1600} height={1067}/> 
          <img src={newcult9} className="mx-auto" width={1600} height={1067}/> 
          <img src={newcult10} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Aurora
