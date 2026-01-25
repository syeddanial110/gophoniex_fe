import BannerCarousel from "@/components/UICarousel/BannerCarousel";
import ClientStats from "@/containers/Home/ClientStats";
import AboutSection from "@/containers/Home/AboutSection";
import SectionAnimation from "@/containers/Home/SectionAnimation";
import CallToAction from "@/containers/Home/CallToAction";
import VideoSection from "@/containers/Home/VideoSection";
import Footer from "@/containers/Footer/Footer";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { BASEURL } from "@/apis/ApiRequest";
import Header from "@/containers/Header/Header";
import NewsLetterModal from "@/containers/Home/NewsLetterModal";

// Fetch metadata from API
async function getMetadata() {
  try {
    const response = await fetch(
      `${BASEURL}${ApiEndpoints.homePageContent.get}`,
      {
        // Add cache options if needed
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch metadata");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching metadata:", error);
    // Return default metadata as fallback
    return {
      title: "Default Home Title",
      description: "Default home description",
    };
  }
}

// Generate metadata
export async function generateMetadata() {
  const metadata = await getMetadata();
  console.log("metadata", metadata);
  return {
    title: metadata.data.home.metaTitle,
    description: metadata.data.home.metaDescription,
    // You can add more meta tags here
    // openGraph: {
    //   title: metadata.title,
    //   description: metadata.description,
    //   // Add other OG tags as needed
    // },
    // twitter: {
    //   title: metadata.title,
    //   description: metadata.description,
    //   // Add other Twitter card tags as needed
    // },
  };
}

export default function Home() {
  return (
    <>
    <Header />
      <div className="flex flex-col items-center h3 pt-10 gap-3">
        <NewsLetterModal />
        <BannerCarousel />
        <ClientStats />
        <AboutSection />
        {/* <SectionAnimation /> */}
        <CallToAction />
        <VideoSection />
      </div>
      <Footer />
    </>
  );
}
