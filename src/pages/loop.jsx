import React, { useEffect } from "react";

import img1 from "../assets/hero/hero1.webp";
import img2 from "../assets/hero/hero2.webp";
import img3 from "../assets/hero/hero3.webp";
import img4 from "../assets/hero/hero4.webp";
import img5 from "../assets/hero/hero5.webp";
import img6 from "../assets/hero/hero6.webp";
import img7 from "../assets/hero/hero7.webp";
import img8 from "../assets/hero/hero8.webp";
import img9 from "../assets/hero/hero9.webp";
import img10 from "../assets/hero/hero10.webp";
import img11 from "../assets/hero/hero11.webp";
import img12 from "../assets/hero/hero12.webp";
import img13 from "../assets/hero/hero13.webp";
import img14 from "../assets/hero/hero14.webp";
import img15 from "../assets/hero/hero15.webp";
import img16 from "../assets/hero/hero16.webp";
import img17 from "../assets/hero/hero17.webp";
import img18 from "../assets/hero/hero18.webp";
import img19 from "../assets/hero/hero19.webp";
import img20 from "../assets/hero/hero20.webp";

const cells = [
  img1, null, null, null, img2, null,
  img3, null, img4, img5, null, img6,
  null, img7, null, img8, img9, null,
  img10, null, img11, null, img12, img13,
  img14, img15, null, img16, img17, null,
  null, img18, null, img19, null, img20
];

function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 flex flex-col justify-center items-center min-h-screen flex-grow">
      <div className="w-[80%]">
        <p className="text-lg font-light">somethinghigher&Brighter</p>
        <div className="grid grid-cols-6 gap-1">
        {cells.map((cell, index) => (
          <div key={index} className="w-full aspect-[3/2]">
            {cell ? (
              <img
                src={cell}
                alt=""
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Hero;
