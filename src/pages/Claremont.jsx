import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import claremont1 from '../assets/111025-3.webp'
import claremont2 from '../assets/111025-1.webp'
import claremont3 from '../assets/111025-4.webp'
import claremont4 from '../assets/111025-5.webp'
import claremont5 from '../assets/111025-2.webp'
import { IoArrowBackOutline } from "react-icons/io5";
import Page from "../components/page";


function Claremont() {
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
          <img src={claremont1} className="mx-auto" width={1600} height={1067}/> 
          <img src={claremont2} className="mx-auto" width={1600} height={1067}/> 
          <img src={claremont3} className="mx-auto" width={1600} height={1067}/> 
          <img src={claremont4} className="mx-auto" width={1600} height={1067}/> 
          <img src={claremont5} className="mx-auto" width={1600} height={1067}/> 
        </div>
      </div>
    </Page>
  )
}

export default Claremont
