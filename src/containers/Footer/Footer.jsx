import UITypography from "@/components/UITypography/UITypography";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import blackLogo from "../../assets/Images/blackLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#fafbfc] border-t border-gray-200">
      {/* Top Row: Logo and Socials */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src={blackLogo} alt="Phoenix Sports" height={60} />
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              className="w-6 h-6 bg-black rounded hover:text-main"
              strokeWidth={1}
              fill="white"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
                className="w-6 h-6 bg-black rounded hover:text-main"
              strokeWidth={1}
              fill="white"
            />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube
              className="w-6 h-6 text-black hover:text-main"
              strokeWidth={1}
            />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="w-6 h-6 text-black hover:text-main"
              strokeWidth={1}
            />
          </Link>
        </div>
      </div>

      {/* Middle Row: Info Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-8 border-b border-gray-200">
        {/* Contact */}
        <div>
          <div className="font-semibold mb-2">Contact Us</div>
          <div className="text-gray-700 text-sm mb-1">(+1)-214-293-0000</div>
          <div className="text-gray-700 text-sm mb-4">support@phoenix.com</div>
          <div className="font-semibold mb-1">Location</div>
          <div className="text-gray-700 text-sm">
            Lorem Ipsum is simply dummy text
            <br />
            of the printing and typesetting
          </div>
        </div>
        {/* Philosophy */}
        <div>
          <div className="font-semibold mb-2">Our Philosophy</div>
          <div className="text-gray-700 text-sm mb-2">
            At Phoenix Sports, we believe in building confident, well-rounded
            kids through sports and play!
          </div>
          <div className="text-gray-700 text-sm">
            Led by Coach Doug, a former CUSD PE instructor with a Master's in
            Education and 9+ years of TK-3 classroom
          </div>
        </div>
        {/* Legal */}
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              <Link href="#">
                <span>Waiver of Liability</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Cancellation</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Terms and Conditions</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              <Link href="#">
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Locations</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row: Copyright & Links */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-4 text-xs text-gray-600">
        <div>Copyright 2025 Phoenix Fit All Rights Reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#">
            <span>Terms of use</span>
          </Link>
          <Link href="#">
            <span>Privacy Policy</span>
          </Link>
          <Link href="#">
            <span>Sitemap</span>
          </Link>
        </div>
      </div>

      {/* Slogan */}
      <div className="w-full text-center py-8">
        <span className="text-[64px] font-bold leading-none tracking-tight text-gray-900">
          Unleash Kid Power
        </span>
      </div>
    </footer>
  );
};

export default Footer;
