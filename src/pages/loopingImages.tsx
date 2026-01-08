import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, MotionValue } from "motion/react";
import img1 from "../assets/080425-1.webp";
import img2 from "../assets/121125-4.webp";
import img4 from "../assets/080425-3.webp";
import img3 from "../assets/112325-1.webp";
import img5 from "../assets/willa-1.webp";
import img6 from "../assets/091425-4.webp";
import img7 from "../assets/111025-3.webp";
import img8 from "../assets/121125-1.webp";

const RADIUS = 160;

type SquareProps = {
  index: number;
  children?: React.ReactNode;
  className?: string;
};

type SquareWithOffsetProps = {
  index: number;
  parentIndex: number;
};

export function LoopingImages() {
  const lastIndex = images.length - 1;

  return (
    <div className="flex items-center justify-center -mt-50 mb-40">
      <div className="scale-[0.6] sm:scale-[0.85] md:scale-100 origin-center">
        <div className="relative w-[500px] h-[500px]">
          {/* squares */}
          {Array.from({ length: images.length }).map((_, index) =>
            index === lastIndex ? null : <Square index={index} key={index} />
          )}

          {/* Render the last square with the duplicate first square masked inside it */}
          <Square index={lastIndex}>
            <SquareWithOffset index={0} parentIndex={lastIndex} />
          </Square>
        </div>
      </div>
    </div>
  );
}

function SquareWithOffset({ index, parentIndex }: SquareWithOffsetProps){
  const image = images[index];
  const firstSquareOffset = useMotionValue(0);

  useEffect(() => {
    const controls = animate(firstSquareOffset, 1, {
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      duration: 48,
    });
    return () => controls.stop();
  }, [firstSquareOffset]);

    const x = useTransform(firstSquareOffset, (offset: number) => {
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    return (
      Math.cos(firstAngle) * RADIUS -
      Math.cos(lastAngle) * RADIUS
    );
  });

  const y = useTransform(firstSquareOffset, (offset: number) => {
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    return (
      Math.sin(firstAngle) * RADIUS -
      Math.sin(lastAngle) * RADIUS
    );
  });


  return (
    <motion.div className="absolute rounded-lg overflow-hidden will-change-transform [transform:translateZ(0)]" style={{ x, y }}>
      <img
        src={image}
        alt={`Square ${index}`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        loading="eager"
        decoding="async"
      />
    </motion.div>
  );
}

function Square({ index, children, className = "" }: SquareProps) {
  const image = images[index];
  const pathOffset: MotionValue<number> = useMotionValue(getPathOffset(index));

  useEffect(() => {
    const controls = animate(pathOffset, pathOffset.get() + 1, {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      ease: "linear",
      duration: 48,
    });
    return () => controls.stop();
  }, [pathOffset]);

    const x = useTransform(pathOffset, (offset: number) => {
      const angle = (offset % 1) * Math.PI * 2;
      return Math.cos(angle) * RADIUS;
    });

    const y = useTransform(pathOffset, (offset: number) => {
      const angle = (offset % 1) * Math.PI * 2;
      return Math.sin(angle) * RADIUS;
    });


  return (
    <motion.div
      className={`absolute rounded-lg overflow-clip w-[170px] ${className}`}
      style={{
        width: 190,
        left: "50%",
        top: "50%",
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 1, delay: index * 0.12 + 0.35, ease: "easeOut" },
        scale: { duration: 1, delay: index * 0.12 + 0.35, ease: "easeOut" },
      }}
    >
      <img
        src={image}
        alt={`Square ${index}`}
        className="block w-full h-auto"
        draggable={false}
        loading="eager"
        decoding="async"
      />

      <motion.div
        className="absolute rounded-lg overflow-hidden will-change-transform [transform:translateZ(0)]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function getPathOffset(index: number): number {
  return index / 8;
}

const images: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

