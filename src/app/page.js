import { BASEURL } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import HomeClient from "@/containers/Home/HomeClient";

async function getHomeMetadata() {
  try {
    const response = await fetch(`${BASEURL}${ApiEndpoints.homePageContent.get}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch home metadata");
    return response.json();
  } catch (error) {
    console.error("Error fetching home metadata:", error);
    return null;
  }
}

export async function generateMetadata() {
  const metadata = await getHomeMetadata();
  const data = metadata?.data || {};
  const title = data?.metaTitle || "Phoenix Sports";
  const description = data?.metaDescription || "";
  return { title, description };
}

export default function Home() {
  return <HomeClient />;
}
