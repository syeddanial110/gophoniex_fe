"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import UITypography from "@/components/UITypography/UITypography";
import cardImg from "../../assets/Images/scroll2.png";
import { pathLocations } from "@/utils/navigation";

const TopCollectionCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const collections = [
    {
      title: "Oceanside Toddler Soccer",
      img: cardImg,
      link: "/",
    },
    {
      title: "Carlsbad Kids Soccer",
      img: cardImg,
      link: "/",
    },
    { title: "Encinitas Kids Soccer", img: cardImg, link: "/" },
    {
      title: "Encinitas Toddler Soccer",
      img: cardImg,
      link: "/",
    },
    {
      title: "Oceanside Toddler Soccer",
      img: cardImg,
      link: "/",
    },
    {
      title: "Carlsbad Kids Soccer",
      img: cardImg,
      link: "/",
    },
    { title: "Encinitas Kids Soccer", img: cardImg, link: "/" },
    {
      title: "Encinitas Toddler Soccer",
      img: cardImg,
      link: "/",
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index) => {
    if (api) api.scrollTo(index);
  };

  return (
    <section className="w-full px-6 py-16">
      <div className="flex justify-between items-center mb-6">
        <UITypography
          variant="h2"
          text="Top Selling Collections"
          className="font-bold"
        />
        <Link href={pathLocations.program} className="text-blue-600 text-sm font-medium">
          View all collections
        </Link>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent>
          {collections.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-1/3 pl-4" // ✅ 3 slides per view
            >
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <Link
                    href={item.link}
                    className="mt-3 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* Dots navigation */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCollectionCarousel;
