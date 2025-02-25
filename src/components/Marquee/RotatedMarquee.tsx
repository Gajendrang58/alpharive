import Card from "@/ui/Card";
import CardContent from "@/ui/CardContent";
import LogoMarquee from "../LogoCarousel";


const RotatedMarquee = () => {
  return (
    <Card className="relative overflow-hidden w-[300px] h-[200px]">
      <CardContent className="absolute w-[400px] h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]">
        <LogoMarquee />
        <LogoMarquee />
        <LogoMarquee />
      </CardContent>
    </Card>
  );
};

export default RotatedMarquee;
