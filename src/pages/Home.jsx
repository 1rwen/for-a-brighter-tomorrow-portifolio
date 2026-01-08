import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import homePage1 from '../assets/121125-4.webp'
import homePage2 from '../assets/112325-1.webp'
import homePage3 from '../assets/111025-5.webp'
import homePage4 from '../assets/080425-1.webp'
import homePage5 from '../assets/121825-7.webp'
import homePage6 from '../assets/091425-3.webp'
import React from 'react'
import { Page } from "../components/Page.jsx";

function Home() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

return (
  <Page>
    <div className="flex justify-center p-[40px]">
      {/* PHOTO COLUMN (ANCHOR) */}
      <div className="flex flex-col gap-1 max-w-[900px] w-full">
        {/* FIXED HEADER (LEFT SIDE) */}
        <div className="fixed top-0 left-0 p-4 z-50">
          <div className="font-medium">somethingbrighter&Higher</div>

          <Link to="/veryFirstLife">
            <p className="text-sm font-thin hover:underline cursor-pointer">
              what is veryFirstLife?
            </p>
          </Link>

          <Link to="/about">
            <p className="text-sm font-thin hover:underline cursor-pointer">
              info
            </p>
          </Link>

          <Link to="/circle">
            <p className="text-sm font-thin hover:underline cursor-pointer">
              testing
            </p>
          </Link>
        </div>

        {/* PHOTOS */}
        <div className="flex flex-col gap-1 bg-white p-2">
          <Link to="/beach">
            <div className="relative group">
              <img
                src={homePage1}
                width={1600}
                height={1067}
                loading="eager"
                decoding="async"
                className="block"
                alt=""
              />
              <div className="absolute inset-0 bg-[#8F8F8F] opacity-0 hover:opacity-20 transition-opacity duration-400 group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-thin text-lg">
                  daytona, december 2025
                </span>
              </div>
            </div>
          </Link>

           
          <Link to="/erick">
            <div className="relative group">
              <img
                src={homePage2}
                width={1600}
                height={1067}
                loading="eager"
                decoding="async"
                className="block"
                alt=""
              />
              <div className="absolute inset-0 bg-[#8F8F8F] opacity-0 hover:opacity-20 transition-opacity duration-400 group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-thin text-lg">
                  erick, november 2025
                </span>
              </div>
            </div>
          </Link>

          <Link to="/claremont">
            <div className="relative group">
              <img
                src={homePage3}
                width={1600}
                height={1067}
                loading="eager"
                decoding="async"
                className="block"
                alt=""
              />
              <div className="absolute inset-0 bg-[#8F8F8F] opacity-0 hover:opacity-20 transition-opacity duration-400 group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-thin text-lg">
                  color-block, november 2025
                </span>
              </div>
            </div>
          </Link>

          <Link to="/chair">
            <div className="relative group">
              <img
                src={homePage5}
                width={1600}
                height={1067}
                loading="eager"
                decoding="async"
                className="block"
                alt=""
              />
              <div className="absolute inset-0 bg-[#8F8F8F] opacity-0 hover:opacity-20 transition-opacity duration-400 group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-thin text-lg">
                  chair, december 2025
                </span>
              </div>
            </div>
          </Link>

          <Link to="/mtwilson">
            <div className="relative group">
              <img
                src={homePage6}
                width={1600}
                height={1067}
                loading="eager"
                decoding="async"
                className="block"
                alt=""
              />
              <div className="absolute inset-0 bg-[#8F8F8F] opacity-0 hover:opacity-20 transition-opacity duration-400 group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-thin text-lg">
                  mt wilson, september 2025
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </Page>
);


}

export default Home


//  <div className="flex justify-center p-[30px]">
//       {/* PHOTO COLUMN (ANCHOR) */}
//       <div className="flex flex-col gap-1 max-w-[700px]">
        
//         {/* TEXT ATTACHED TO LEFT EDGE */}
//         <div className="fixed top-0 left-0 p-4 z-50 font-heavy"> 
//           somethingbrighter&Higher 
//           <Link to="/veryFirstLife">
//             <p className="text-sm font-thin hover:underline cursor-pointer">what is veryFirstLife?</p> 
//           </Link>
          
//           <Link to="/about">
//             <p className="text-sm font-thin hover:underline cursor-pointer">info</p> 
//           </Link>

//           <Link to="/circle">
//             <p className="text-sm font-thin hover:underline cursor-pointer">testing</p> 
//           </Link>
//         </div>

//         {/* PHOTOS */}
//         <Link to="/beach">
//           <img src={homePage1} width={1600} height={1067} loading="eager" decoding="async"/>
          
//         </Link>
//         <Link to="/erick">
//           <img src={homePage2} width={1600} height={1067} loading="lazy" decoding="async"/>
//         </Link>
//         <Link to="/claremont">
//           <img src={homePage3} width={1600} height={1067} loading="lazy" decoding="async"/>
//         </Link>
//         <Link to="/mtwilson">
//           <img src={homePage6} width={1600} height={1067} loading="lazy" decoding="async"/>
//         </Link>
//         <Link to="/willa">
//           <img src={homePage5} width={1600} height={1067} loading="lazy" decoding="async"/>
//         </Link>
//         <Link to="/blockparty">
//           <img src={homePage4} width={1600} height={1067} loading="lazy" decoding="async"/>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home