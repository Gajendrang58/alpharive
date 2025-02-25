"use client";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg text-white w-80 mx-auto"
      whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-xl font-bold">Crypto X</h2>
      <p className="text-gray-400">Market Overview</p>
    </motion.div>
  );
};

export default AnimatedCard;
