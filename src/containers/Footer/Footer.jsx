import UITypography from "@/components/UITypography/UITypography";
import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { pathLocations } from "@/utils/navigation";

const Footer = () => {
  return (
    <div className="bg-main py-4  w-full">
      <div className="grid grid-cols-3 justify-items-center ">
        <div className="w-[80%] flex flex-col gap-5">
          <UITypography
            variant="h6"
            text="OUR PHILOSOPHY"
            className="text-white"
          />
          <UITypography
            text="At Phoenix Sports, we believe in building confident, well-rounded kids through sports and play!"
            className="text-white"
          />
          <UITypography
            text="Led by Coach Doug, a former CUSD PE instructor with a Master’s in Education and 9+ years of TK-3 classroom teaching experience, our program combines fun, teamwork, and life skills. Kids learn fundamentals, social skills, and confidence—all while having a blast!"
            className="text-white"
          />
        </div>
        <div className="w-[80%]">
          <UITypography variant="h6" text="LEGAL" className="text-white" />
          <div className="flex flex-col gap-2 mt-2">
            <Link href={pathLocations.wavierLiablity}>
              <UITypography
                text="Waiver of Liability"
                className="footer-link"
              />
            </Link>
            <Link href={pathLocations.cancellationRefundPolicy}>
              <UITypography
                text="Cancellation and Refund Policy"
                className="footer-link"
              />
            </Link>
            <Link href={pathLocations.termsAndConditions}>
              <UITypography
                text="Terms and Conditions"
                className="footer-link"
              />
            </Link>
            <Link href={pathLocations.privacyPolicy}>
              <UITypography text="Privacy Policy" className="footer-link" />
            </Link>
            <Link
              target="_blank"
              href="http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=124235.&lawCode=HSC"
            >
              <UITypography
                text="Safety Concussion Protocol"
                className="footer-link"
              />
            </Link>
            <Link href={pathLocations.termsOfServices}>
              <UITypography text="Terms of Service" className="footer-link" />
            </Link>
            <Link href={pathLocations.ccpa}>
              <UITypography
                text="Do not sell my personal information"
                className="footer-link"
              />
            </Link>
            <Link href={pathLocations.otherProgramSwitch}>
              <UITypography
                text="Other Program Switch"
                className="footer-link"
              />
            </Link>
          </div>
        </div>
        <div className="w-[80%]">
          <UITypography variant="h6" text="COMPANY" className="text-white" />
          <div className="flex flex-col gap-2 mt-2">
            <Link href={pathLocations.about}>
              <UITypography text="About Us" className="footer-link" />
            </Link>
            <Link href={pathLocations.contact}>
              <UITypography text="Contact Us" className="footer-link" />
            </Link>
            <Link href={pathLocations.locations}>
              <UITypography text="Locations" className="footer-link" />
            </Link>
            <Link href={pathLocations.privacyPolicy}>
              <UITypography text="Privacy Policy" className="footer-link" />
            </Link>
            <Link href={pathLocations.faqs}>
              <UITypography text="FAQ" className="footer-link" />
            </Link>
            <Link href={pathLocations.about}>
              <UITypography text="Employment" className="footer-link" />
            </Link>
            <Link href={pathLocations.contact}>
              <UITypography text="Sitemap" className="footer-link" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        <Facebook fill="#ffffff" strokeWidth={0} size={25} />
        <Instagram strokeWidth={1} color="white" size={25} />
        <Youtube strokeWidth={1} color="white" size={30} />
      </div>
      <div className="w-full flex justify-center pt-10 pb-4">
        <div className="w-[80%]">
          <hr />
        </div>
      </div>
      <div>
        <UITypography
          text="© 2025, Phoenix Sports"
          className="text-center text-white"
        />
      </div>
    </div>
  );
};

export default Footer;
