import UITypography from "@/components/UITypography/UITypography";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-4">
        <UITypography variant="h4" text="Contact Us" />
        <UITypography
          variant="h1"
          text="Contact Phoenix Sports Admin Office "
        />
        <UITypography text="Let's Start a Conversation" className="text-main" />
        <UITypography text="Sometimes, you just need a little help from your friends. Or a Phoenix Sports coach. Either way, we are here when you need us. Email us directly or contact us via the form below. We will answer and get back to you, unlike some places which never respond." />
        <div>
          <Link href="mailto:gophoenix@gophoenixsports.com">
            <UITypography text="gophoenix@gophoenixsports.com" />
          </Link>
          <UITypography text="(760) 587-7452 (text is easiest)" />
        </div>

        <div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
