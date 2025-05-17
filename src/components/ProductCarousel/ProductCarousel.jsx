"use client";
import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { generateSlides } from "@/utils/dummyData";
import Image from "next/image";

const ProductCarousel = () => {
  const mainRef = useRef(null); // Reference for the main Splide component
  const thumbsRef = useRef(null); // Reference for the thumbnail Splide component

  // Sync the main Splide with the thumbnails Splide after mounting
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  // Render slides
  const renderSlides = () => {
    return generateSlides().map((slide) => (
      <SplideSlide key={slide.src}>
        <Image src={slide.src} alt={slide.alt} width={500} height={300} />
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "10rem",
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div className="wrapper">
      <h2 id="thumbnail-slider-example">Thumbnail Slider</h2>

      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default ProductCarousel;
