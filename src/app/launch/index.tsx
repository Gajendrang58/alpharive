import AnimatedCard from "@/components/Animations/AnimationCard";
import Web3FramerCard from "@/components/Cards/Web3FrameCard";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CustomImage from "@/components/CustomImage";
import Header from "@/components/Header/Header";
import HeroImage from "@/components/HeroImage";
import HeroSecondSection from "@/components/HeroSecondSection";
import HeroSection from "@/components/HeroSection";
import InteroperableEcosystem from "@/components/InteroperableEcosystem";
import LogoCarousel from "@/components/LogoCarousel";
import SecurityCard from "@/components/SecurityCard/SecurityCard";
import ThreeScene from "@/threejs/ThreeScene";

const Launch = () => {
  return (
    <>
      {/* <div> */}
        <div>
          <Header />
        </div>
        <div>
          <ThreeScene />
        </div>
        <div>
          <HeroSection />
        </div>
        <div className="pb-20">
          <HeroImage />
        </div>
        <div>
          <HeroSecondSection />
        </div>
        <div className="mb-10">
          <LogoCarousel />
        </div>
        <div>
          <HeroSecondSection />
        </div>
        <div className="mb-20 px-20">
          <InteroperableEcosystem />
        </div>
        <div className="mb-20 px-20">
            <SecurityCard/>
        </div>
      {/* </div> */}
    </>
  );
};
export default Launch;
