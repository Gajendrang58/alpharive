// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import LogoMarquee from "./LogoCarousel";
// import RotatedMarquee from "./Marquee/RotatedMarquee";
// import AngleMarquee from "./Marquee/AngleMarquee";
// import OppositeMarquee from "./Marquee/OppositeMarquee";

// export default function InteroperableEcosystem() {
//   return (
//     <div className="flex h-[300px] items-center justify-between bg-gradient-to-r from-[#0a1f47] to-[#041026] text-white rounded-2xl p-8 max-w-5xl mx-auto shadow-lg">
//       {/* Left Section */}
//       <div className="max-w-md">
//         <span className="bg-blue-600 text-xs uppercase px-3 py-1 rounded-lg text-white">
//           Ecosystem
//         </span>
//         <h2 className="text-3xl font-bold mt-4">Interoperable Ecosystem</h2>
//         <p className="text-gray-300 mt-3">
//           Our platform supports cross-chain interactions, ensuring seamless
//           integration with other blockchain networks.
//         </p>
//       </div>

//       {/* Right Section (Swiper Carousel) */}
//       <div className="marquees overflow-hidden mr-[-100px]">
//         {" "}
//         {/* Adjust width as needed */}
//         <AngleMarquee />
//         <OppositeMarquee />
//         <AngleMarquee />
//       </div>
//     </div>
//   );
// }

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import LogoMarquee from "./LogoCarousel";
import RotatedMarquee from "./Marquee/RotatedMarquee";
import AngleMarquee from "./Marquee/AngleMarquee";
import OppositeMarquee from "./Marquee/OppositeMarquee";

export default function InteroperableEcosystem() {
  return (
    <div className="marquees flex h-[300px] items-center justify-between bg-gradient-to-r from-[#0a1f47] to-[#041026] text-white rounded-2xl p-8 max-w-5xl mx-auto shadow-lg overflow-hidden">
      {/* Left Section */}
      <div className="max-w-md">
        <div className="w-[100px] bg-opacity-10 border border-purple-300/20 backdrop-blur-lg rounded-lg px-2 py-1">
          <p className="text-lg bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
            Ecosystem
          </p>
        </div>
        <h2 className="text-4xl font-bold mt-4">Interoperable Ecosystem</h2>
        <p className="text-gray-300 mt-3">
          Our platform supports cross-chain interactions, ensuring seamless
          integration with other blockchain networks.
        </p>
      </div>

      {/* Right Section (Swiper Carousel) */}
      <div className="overflow-hidden w-full ml-[-150px] pl-20 mr-[-200px]">
        <AngleMarquee />
        <OppositeMarquee />
        <AngleMarquee />
      </div>
    </div>
  );
}
