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
import VideoSection from "@/containers/Home/VideoSection";
import Footer from "@/containers/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center h3 pt-10 gap-3">
      <BannerCarousel />
      <ClientStats />
      <AboutSection />
      <SectionAnimation />
      <CallToAction />
      <VideoSection />
    </div>
  );
}
