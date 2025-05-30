import UITypography from "@/components/UITypography/UITypography";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-3">
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Privacy Policy" />
          <UITypography
            variant="h4"
            text="Phoenix Sports Privacy Policy"
            className="font-bold"
          />
          <UITypography text="This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://gophoenixsports.com/ (the 'Site')." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="PERSONAL INFORMATION WE COLLECT" />
          <UITypography text="When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as 'Device Information.'" />

          <UITypography text="We collect Device Information using the following technologies:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="'Cookies' are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org." />
            </li>
            <li>
              <UITypography text="'Log files' track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps." />
            </li>
            <li>
              <UITypography text="'Web beacons,' 'tags,' and 'pixels' are electronic files used to record information about how you browse the Site." />
            </li>
          </ul>

          <UITypography text="Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as 'Order Information.'" />

          <UITypography text="When we talk about 'Personal Information' in this Privacy Policy, we are talking both about Device Information and Order Information." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography
            variant="h5"
            text="HOW DO WE USE YOUR PERSONAL INFORMATION?"
          />
          <UITypography text="We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:" />

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Communicate with you;" />
            </li>
            <li>
              <UITypography text="Screen our orders for potential risk or fraud; and" />
            </li>
            <li>
              <UITypography text="When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services." />
            </li>
          </ul>

          <UITypography text="We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns)." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="SHARING YOUR PERSONAL INFORMATION" />
          <UITypography text="We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout." />

          <UITypography text="Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="BEHAVIOURAL ADVERTISING" />
          <UITypography text="As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ('NAI') educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work." />

          <UITypography text="You can opt out of targeted advertising by:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="FACEBOOK" />
            </li>
            <li>
              <UITypography text="GOOGLE" />
            </li>
            <li>
              <UITypography text="BING" />
            </li>
          </ul>

          <UITypography text="Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at: http://optout.aboutads.info/." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="DO NOT TRACK" />
          <UITypography text="Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="YOUR RIGHTS" />
          <UITypography text="If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below." />

          <UITypography text="Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="DATA RETENTION" />
          <UITypography text="When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="MINORS" />
          <UITypography text="The Site is not intended for individuals under the age of 13." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="CHANGES" />
          <UITypography text="We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="CONTACT US" />
          <UITypography text="For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at business@gophoenixsports.com or by mail using the details provided below:" />
          <UITypography text="7701 Caminito Leon, Carlsbad, CA, 92009, United States" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
