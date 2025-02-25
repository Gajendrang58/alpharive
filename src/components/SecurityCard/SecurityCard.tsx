"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SecurityCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group perspective"
      initial={{
        opacity: 0,
        transform:
          "perspective(1200px) rotateX(10deg) rotateY(-10deg) scale(0.9)",
      }}
      animate={{
        opacity: 1,
        transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="marquees h-[500px] flex flex-col items-center justify-between bg-gradient-to-r from-[#0a1f47] to-[#041026] text-white rounded-2xl p-8 max-w-5xl mx-auto shadow-lg overflow-hidden transform transition-transform duration-300"
        initial={{
          transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
        }}
        animate={
          isHovered
            ? {
                transform: "perspective(1200px) rotateX(5deg) rotateY(-5deg)",
              }
            : {
                transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
              }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Section */}
        <div className="mr-[300px]">
          {/* <div className="w-[100px] bg-opacity-10 border border-purple-300/20 backdrop-blur-lg rounded-lg px-2 py-1">
            <p className="text-lg bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
              Ecosystem
            </p>
          </div> */}
          <h2 className="text-4xl font-bold mt-4">Robust Security
          </h2>
          <p className="text-gray-300 mt-3">
          Advanced security protocols to protect your data and transactions.
          </p>
        </div>
        {/* Right Section (Placeholder for Swiper Carousel) */}
        <div className="overflow-hidden w-full ml-[-150px] pl-20 mr-[-300px]">
          <div className="relative flex items-center justify-center w-full h-[250px] overflow-visible rotate-[35deg] mt-[300px]">
            {[
              {
                title: "Cryptox - Basic",
                color: "from-purple-500 to-indigo-500",
                xOffset: "-70%",
                yOffset: "10%",
                zIndex: 1,
              },
              {
                title: "Cryptox - Trade",
                color: "from-teal-400 to-cyan-500",
                xOffset: "-37%",
                yOffset: "-30%",
                zIndex: 2,
              },
              {
                title: "Cryptox - Platinum",
                color: "from-gray-500 to-gray-700",
                xOffset: "0%",
                yOffset: "-70%",
                zIndex: 3,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`absolute w-[370px] h-[220px] bg-gradient-to-r ${card.color} text-white p-6 rounded-xl shadow-lg flex flex-col justify-between transition-transform duration-500`}
                initial={{ rotateZ: 10, x: card.xOffset, y: card.yOffset }}
                whileHover={{ rotateZ: 25, scale: 1.1 }}
                transition={{ duration: 0 }}
                style={{ zIndex: card.zIndex }}
              >
                {/* Payment Icons */}
                <div className="flex justify-between items-center">
                  <motion.div
                    className="w-12 h-8 bg-black text-white rounded-sm flex items-center justify-center"
                    initial={{ rotate: 15 }}
                  >
                    <p className="text-xs">Mastercard</p>
                  </motion.div>

                  <motion.div
                    className="w-10 h-6 bg-black text-white rounded-sm flex items-center justify-center"
                    initial={{ rotate: 15 }}
                  >
                    <p className="text-xs">PayPass</p>
                  </motion.div>
                </div>

                {/* Card Number */}
                <p className="text-lg font-bold tracking-widest">
                  1234 1234 1234 1234
                </p>

                {/* Cardholder Info */}
                <div className="flex justify-between text-sm">
                  <p>CAGATAYHAN</p>
                  <p>18/81</p>
                </div>

                {/* Card Name */}
                <h6 className="text-md font-semibold mt-2">{card.title}</h6>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export default function SecurityCard() {
//   return (
//     <div className="group flex flex-col items-center w-[80vw] mx-auto">
//       {/* Parent Container */}
//       <div className="relative h-[400px] flex flex-col justify-center items-center bg-gradient-to-r from-[#0a1f47] to-[#041026] text-white rounded-2xl p-8 w-full shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <h2 className="text-4xl font-bold mb-4">Robust Security</h2>
//         <p className="text-gray-300 mb-6 text-center">
//           Advanced security protocols to protect your data and transactions.
//         </p>

//         {/* Cards Section */}
//         <div className="relative flex items-center justify-center w-full h-[250px] overflow-visible rotate-[35deg] mt-[400px]">
//           {[
//             { title: "Cryptox - Basic", color: "from-purple-500 to-indigo-500", xOffset: "-80%", yOffset: "10%", zIndex: 1 },
//             { title: "Cryptox - Trade", color: "from-teal-400 to-cyan-500", xOffset: "-60%", yOffset: "-20%", zIndex: 2 },
//             { title: "Cryptox - Platinum", color: "from-gray-500 to-gray-700", xOffset: "-40%", yOffset: "-40%", zIndex: 3 },
//           ].map((card, index) => (
//             <motion.div
//               key={index}
//               className={`absolute w-[350px] h-[200px] bg-gradient-to-r ${card.color} text-white p-6 rounded-xl shadow-lg flex flex-col justify-between transition-transform duration-500`}
//               initial={{ rotateZ: 10, x: card.xOffset, y: card.yOffset }}
//               whileHover={{ rotateZ: 20, scale: 1.1 }}
//               transition={{ duration: 0.5 }}
//               style={{ zIndex: card.zIndex }}
//             >
//               {/* Payment Icons */}
//               <div className="flex justify-between items-center">
//                 <motion.div
//                   className="w-12 h-8 bg-black text-white rounded-sm flex items-center justify-center"
//                   initial={{ rotate: 15 }}
//                 >
//                   <p className="text-xs">Mastercard</p>
//                 </motion.div>

//                 <motion.div
//                   className="w-10 h-6 bg-black text-white rounded-sm flex items-center justify-center"
//                   initial={{ rotate: 15 }}
//                 >
//                   <p className="text-xs">PayPass</p>
//                 </motion.div>
//               </div>

//               {/* Card Number */}
//               <p className="text-lg font-bold tracking-widest">1234 1234 1234 1234</p>

//               {/* Cardholder Info */}
//               <div className="flex justify-between text-sm">
//                 <p>CAGATAYHAN</p>
//                 <p>18/81</p>
//               </div>

//               {/* Card Name */}
//               <h6 className="text-md font-semibold mt-2">{card.title}</h6>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
