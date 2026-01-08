import { useEffect } from 'react'
import blockparty1 from '../assets/080425-1.webp'
import blockparty2 from '../assets/080425-2.webp'
import blockparty3 from '../assets/080425-3.webp'
import blockparty4 from '../assets/080425-4.webp'
import blockparty5 from '../assets/080425-5.webp'
import blockparty6 from '../assets/080425-6.webp'
import blockparty7 from '../assets/080425-7.webp'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import Page from "../components/page";


function BlockParty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <div className="flex flex-col gap-1 max-w-[900px] pt-[30px] pb-[30px] mx-auto">
        <div className="fixed top-0 left-0 p-4 z-50 font-black"> 
          <Link to="/">
            <p className="flex items-center gap-2 text-sm font-thin hover:underline cursor-pointer">
              <IoArrowBackOutline />
              back
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <img src={blockparty1} className="mx-auto" width={1600} height={1067}/> 
          <img src={blockparty2} className="mx-auto" width={1600} height={1067}/> 
          <img src={blockparty3} className="mx-auto" width={1600} height={1067}/> 
          <img src={blockparty4} className="mx-auto" width={1600} height={1067}/> 
          <img src={blockparty5} className="mx-auto" width={1600} height={1067}/> 
          <img src={blockparty6} className="mx-auto" width={1600} height={1067}/>
          <img src={blockparty7} className="mx-auto" />
        </div>
      </div>
    </Page>
  )
}

export default BlockParty
