"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/social.png",
  "/apple.png",
  "/chat-gpt.png",
  "/science.png",
  "/social.png",
  "/apple.png",
  "/chat-gpt.png",
  "/science.png",
  "/social.png",
  "/apple.png",
  "/chat-gpt.png",
  "/science.png",
];

export default function LogoMarquee() {
  return (
    <div className="relative bg-stone-950 py-4 pb-20 mx-[150px]">
      {/* Marquee wrapper with mask effect */}
      <div className="relative overflow-hidden">
        <div className="mask-gradient">
          <Marquee speed={30} gradient={false}>
            {logos.map((logo, index) => (
              <div key={`img-${index}`} className="mx-10">
                <Image src={logo} alt={`Logo ${index + 1}`} width={50} height={30} className="text-white" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* CSS for Blur Effect */}
      <style jsx>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, black 20%, black 80%, rgba(0, 0, 0, 0) 100%);
          mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, black 20%, black 80%, rgba(0, 0, 0, 0) 100%);
        }
      `}</style>
    </div>
  );
}
