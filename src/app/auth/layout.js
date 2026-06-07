import { Geist, Geist_Mono } from "next/font/google";
import loginBanner from "@/assets/Images/loginBanner.jpg";
import logo from "@/assets/Images/logo3.svg";
import Image from "next/image";
import { ImageBaseUrl } from "@/apis/ApiRequest";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div
            style={{
              backgroundImage: `url('${loginBanner.src}')`,
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              width: "100%",
            }}
          className="hidden lg:block bg-dark"></div>
          <div className="w-full max-w-md flex flex-col justify-center px-4 sm:px-6 lg:px-0 py-8 lg:py-0">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image src={logo} alt="logo" height={300} width={300} className="w-28 sm:w-40 lg:w-[200px] h-auto" />
          </div>
            <div className="bg-card border border-border rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
              {children}
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Phoenix Sports. All rights
              reserved.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
