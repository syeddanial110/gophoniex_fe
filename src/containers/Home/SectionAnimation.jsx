"use client";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import animImage from "../../assets/Images/animImg.jpg";
import animImage2 from "../../assets/Images/animImg2.jpg";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import { CircleArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SectionAnimation = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".stack-card");
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { y: 0, zIndex: 10 + i, opacity: 1 });
      } else {
        gsap.set(card, { y: 100, zIndex: 10 + i, opacity: 0 });
      }
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${i * 620} center`,
          end: `+=300`,
          scrub: true,
          markers: false,
        },
      });
    });
  }, []);

  const data = [
    {
      img: animImage,
      title: "Whole Child Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      bgColor: "bg-main",
      textColor: "text-white",
    },
    {
      img: animImage2,
      title: "Tailored Coaching",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      img: animImage,
      title: "Neuroaffirming Friends",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      bgColor: "bg-main",
      textColor: "text-white",
    },
    {
      img: animImage2,
      title: "5 Star Reviews",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] min-h-[350vh] flex justify-center"
    >
      <div className="sticky top-54 min-w-[100%] h-[280px]">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className={`stack-card absolute inset-0 w-full h-full  flex items-center justify-center ${item.bgColor}`}
            >
              <div className="w-full flex items-center gap-15 h-[280px]">
                <div className="h-full">
                  <Image
                    src={item.img}
                    alt="img"
                    style={{ width: "100%", height: "280px" }}
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <CircleArrowUp
                    className="rotate-45"
                    size={70}
                    strokeWidth={1}
                  />
                  <div>
                    <UITypography
                      variant="h2"
                      text={item.title}
                      className={`${item.textColor}`}
                    />
                    <UITypography
                      text={item.description}
                      className={`${item.textColor}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionAnimation;
