"use client";
import UITypography from "@/components/UITypography/UITypography";
import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import blackLogo from "../../assets/Images/blackLogo.png";
import Image from "next/image";
import { pathLocations, WEB_URL } from "@/utils/navigation";
import { useDispatch } from "react-redux";
import { apiGet } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

const Footer = () => {
  const [firstMenu, setFirstMenu] = useState([]);
  const [secondMenu, setSecondMenu] = useState([]);
  const [extraMenu, setExtraMenu] = useState([]);

  const getAllMenu = () => {
    apiGet(
      `${ApiEndpoints.menu.base}${ApiEndpoints.menu.getAll}`,
      (res) => {
        const activeItems = res.data.filter((item) => item.isActive !== 0);
        if (activeItems.length < 10) {
          const half = Math.ceil(activeItems.length / 2);
          setFirstMenu(activeItems.slice(0, half));
          setSecondMenu(activeItems.slice(half));
          setExtraMenu([]);
        } else {
          setFirstMenu(activeItems.slice(0, 5));
          setSecondMenu(activeItems.slice(5, 10));
          setExtraMenu(activeItems.slice(10));
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  console.log("firstMenu", firstMenu);
  console.log("secondMenu", secondMenu);

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
            {firstMenu?.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={`${WEB_URL}/user${pathLocations.content}/${item.slug}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <Link href={pathLocations.cancellationRefundPolicy}>
                <span>Cancellation</span>
              </Link>
            </li>
            <li>
              <Link href={pathLocations.termsAndConditions}>
                <span>Terms and Conditions</span>
              </Link>
            </li> */}
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="text-gray-700 text-sm space-y-1">
            {secondMenu?.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={`${WEB_URL}/user${pathLocations.content}/${item.slug}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {extraMenu.length > 0 && (
        <div className="px-8 py-4 border-b border-gray-200">
          <div className="font-semibold mb-2">More Links</div>
          <div className="grid grid-cols-5 gap-4">
            {extraMenu.map((item, i) => (
              <div key={i}>
                <Link
                  href={`${WEB_URL}/user${pathLocations.content}/${item.slug}`}
                >
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Row: Copyright & Links */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-4 text-xs text-gray-600">
        <div>Copyright 2025 Phoenix Fit All Rights Reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href={pathLocations.termsOfServices}>
            <span>Terms of use</span>
          </Link>
          <Link href={pathLocations.privacyPolicy}>
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
