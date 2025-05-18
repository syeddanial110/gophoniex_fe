import Image from "next/image";
import UICard from "@/components/UICard";
import UIButton from "@/components/UIButton/UIButton";
import Head from "next/head";
import UITypography from "@/components/UITypography/UITypography";
import ImageCarousel from "@/components/UICarousel/ImageCarousel";
import IconCardCarousel from "@/components/UICarousel/IconCardCarousel";
import { dummyData } from "@/utils/dummyData";
import BannerCarousel from "@/components/UICarousel/BannerCarousel";
import ClientStats from "@/containers/Home/ClientStats";
import AboutSection from "@/containers/Home/AboutSection";
import SectionAnimation from "@/containers/Home/SectionAnimation";
import CallToAction from "@/containers/Home/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col items-center h3 pt-10 gap-3">
      <BannerCarousel />
      <ClientStats />
      <AboutSection />
      <SectionAnimation />
      <CallToAction />

      <div className="grid grid-cols-3 gap-3">
        {dummyData.map((item, index) => {
          return (
            <UICard
              key={index}
              title={item.name}
              description={item?.description}
              image={item.image}
              hrefLink={`${item.link}/${item.name}`}
            />
          );
        })}
      </div>
      
      <div className="w-[90%] mt-5">
        <ImageCarousel />
      </div>
      <div className="flex flex-col items-center mt-5 gap-3">
        <UITypography
          variant="h3"
          text="The Phoenix Sports Experience"
          className="text-center"
        />
        <UITypography
          text="Building Confidence, Character & Community with Child-Led Sports Programs Led by a Teacher with a Master’s in Education and 9 Years as a Classroom Teacher."
          className="text-center"
        />
        <div className="w-[80%] mt-6">
          <IconCardCarousel />
        </div>
      </div>
    </div>
  );
}
