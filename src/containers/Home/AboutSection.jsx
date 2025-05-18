import React from "react";
import Image from "next/image";
import aboutImg from "../../assets/Images/scroll1.png";
import AboutSectionCard from "./AboutSectionCard";
import logo from "../../assets/Images/logo.webp";
import UITypography from "@/components/UITypography/UITypography";

const aboutCards = [
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
];

const AboutSection = () => {
  return (
    <section className="w-[70%] mx-auto py-8">
      <div className="flex flex-col items-center">
        <UITypography variant="h2" text="About Phoenix Sports" />
        <UITypography
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.`}
          className="text-center text-gray-500 mb-8 w-[60%]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {aboutCards.map((card, idx) => (
            <AboutSectionCard
              key={idx}
              image={card.img}
              logo={logo}
              description={card.desc}
              btnText={"Get it now"}
              title={card.title}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8 mt-24">
          {aboutCards.map((card, idx) => (
            <AboutSectionCard
              key={idx}
              image={card.img}
              logo={logo}
              description={card.desc}
              btnText={"Get it now"}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
