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

export default function AngleMarquee() {
  return (
    <div className="relative py-4 pb-20 mx-[-500px]">
      {/* Diagonal Marquee Wrapper */}
      <div className="relative overflow-hidden transform -rotate-[45deg] translate-y-10">
        <div className="">
          <Marquee speed={30} gradient={false}>
            {logos.map((logo, index) => (
              <div key={`img-${index}`} className="mx-5">
                <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={50}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* CSS for Blur Effect */}
      <style jsx>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            black 20%,
            black 80%,
            rgba(0, 0, 0, 0) 100%
          );
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            black 20%,
            black 80%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      `}</style>
    </div>
  );
}
