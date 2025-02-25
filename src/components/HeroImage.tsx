"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="relative mx-auto w-[65%] max-w-[1200px]"
      initial={{
        opacity: 1,
        transform:
          "perspective(1200px) translateX(0px) translateY(-80.705px) scale(0.93859) rotateX(16.141deg) rotateY(-8.0705deg)",
      }}
      animate={{
        opacity: 1,
        transform:
          scrollY > 50
            ? "perspective(1200px) translateX(0px) translateY(0px) scale(1.1) rotateX(0deg) rotateY(0deg)"
            : "perspective(1200px) translateX(0px) translateY(-80.705px) scale(0.93859) rotateX(16.141deg) rotateY(-8.0705deg)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-lg bg-black opacity-30 blur-5xl"></div>
      <div className="relative">
        <img
          src="https://framerusercontent.com/images/EY7Wbft06m3xNjh3vuD9fRNDu0.png?scale-down-to=2048"
          alt="Dapp SS"
          className="w-full h-auto object-contain rounded-lg border-8 border-gray-200 border-opacity-5"
        />
      </div>
    </motion.div>
  );
}
