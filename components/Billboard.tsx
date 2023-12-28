"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Customize from "../public/customize.jpg";
import EcoFriendly from "../public/Eco-Friendly.jpg";

export default function Billboard() {
  return (
    <div className="flex-1 md:p-2">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              className="w-full rounded-lg"
              src={Customize}
              alt="Customize your with your own design and preference."
              // width={1920}
              // height={960}
              priority
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="w-full rounded-lg"
              src={EcoFriendly}
              alt=""
              priority
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
