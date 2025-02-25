import Image from "next/image";
import animationImage from "../../public/EY7Wbft06m3xNjh3vuD9fRNDu0.avif"

const CustomImage = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Image
        src={animationImage}
        alt="Custom Image"
        layout="responsive"
        width={2048}
        height={2048}
        sizes="(max-width: 512px) 512px, (max-width: 1024px) 1024px, (max-width: 2048px) 2048px, 1200px"
        className="object-contain"
      />
    </div>
  );
};

export default CustomImage;
