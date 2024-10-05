import { CarouselPlugin } from "@/components/Carousel";
import Categories from "@/components/Categories";
import Enhancement from "@/components/Enhancement";
import FlashSales from "@/components/FlashSales";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <CarouselPlugin/>
      <div className="p-8">
        <FlashSales title="Today's" heading="Flash Sale"/>
        <Separator className="my-2"/>
        <Categories/>
        <Enhancement/>  
        <Separator className="my-2"/>
        <FlashSales title="Our Products" heading="Take a look at our Products"/>
      </div>
    </div>
  );
}
