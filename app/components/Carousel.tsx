"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Carousel() {
  const [animateOpacity, setAnimateOpacity] = useState(1);

  const handleButton = () => {
    setAnimateOpacity(0);
    setTimeout(() => {
      setAnimateOpacity(1);
    }, 600);
  };

  return (
    <>
      <div className="w-full h-[400px] lg:h-[552px] bg-gray-100 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animateOpacity }}
          transition={{
            delay: 0.2,
          }}
          className="w-full h-[400px] lg:h-[552px] bg-gray-300 flex items-center justify-center"
          style={{
            background: `url("/images/banner.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center w-full justify-between px-10 lg:px-14">
            <div
              className="flex items-center justify-center p-1 lg:p-[10px] cursor-pointer bg-white hover:bg-gray-100 shadow-sm"
              onClick={handleButton}
            >
              <Image
                height={28}
                width={28}
                src="/icons/arrow-left.svg"
                alt="arrow-left"
              />
            </div>
            <div
              className="flex items-center justify-center p-1 lg:p-[10px] cursor-pointer bg-white hover:bg-gray-100 shadow-sm"
              onClick={handleButton}
            >
              <Image
                height={28}
                width={28}
                src="/icons/arrow-right-secondary.svg"
                alt="arrow-right"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
