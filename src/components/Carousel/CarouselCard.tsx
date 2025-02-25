"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCard = () => {
  return (
    <motion.div
      initial={{ x: -100, y: 100, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden p-4"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500 }}
        className="rounded-xl"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/300" alt="Slide 1" className="w-full h-48 object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300" alt="Slide 2" className="w-full h-48 object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300" alt="Slide 3" className="w-full h-48 object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Carousel Card</h2>
        <p className="text-gray-500 text-sm">This is a card with an animated carousel.</p>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
