import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationMenuDemo from "@/containers/Header/NavigationMenu/NavigationMenu";
import { SideNavigation } from "@/containers/Header/SideNavigation/SideNavigation";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "@/store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <NavigationMenuDemo></NavigationMenuDemo>
        <SideNavigation></SideNavigation> */}
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
