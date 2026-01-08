import { useEffect, useState } from 'react'
import mtwilson1 from '../assets/091425-3.webp'
import mtwilson2 from '../assets/091425-2.webp'
import mtwilson4 from '../assets/091425-4.webp'
import mtwilson5 from '../assets/091425-5.webp'
import mtwilson6 from '../assets/091425-6.webp'
import mtwilson7 from '../assets/091425-7.webp'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import Page from "../components/page";


function Mtwilson() {
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
          <img src={mtwilson1} className="mx-auto" width={1600} height={1067}/> 
          <img src={mtwilson2} className="mx-auto" width={1600} height={1067}/> 
          <img src={mtwilson4} className="mx-auto" width={1600} height={1067}/> 
          <img src={mtwilson5} className="mx-auto" width={1600} height={1067}/> 
          <img src={mtwilson6} className="mx-auto" width={1600} height={1067}/> 
          <img src={mtwilson7} className="mx-auto" width={1600} height={1067}/>
        </div>
      </div>
    </Page>
  )
}

export default Mtwilson
