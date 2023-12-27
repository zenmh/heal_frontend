"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  return (
    <Carousel className="h-[400px] md:h-[500px] lg:h-[600px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <div
              style={{
                backgroundImage: `url(/images/banner/${++i}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {Array(17)
                .fill(null)
                .map((_, i) => (
                  <br key={i} />
                ))}
              <div className="hidden md:block">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <br key={i} />
                  ))}
              </div>
              <div className="hidden lg:block">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <br key={i} />
                  ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Banner;
