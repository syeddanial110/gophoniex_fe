import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const TermsConditions = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-3">
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Terms and Conditions" />
          <UITypography
            variant="h4"
            text="TERMS OF SERVICE"
            className="font-bold"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="OVERVIEW" />
          <UITypography text="This website is operated by Phoenix Sports. Throughout the site, the terms 'we,' 'us,' and 'our' refer to Phoenix Sports. Phoenix Sports offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here." />
          <UITypography text="By visiting our site and/or purchasing something from us, you engage in our 'Service' and agree to be bound by the following terms and conditions ('Terms of Service,' 'Terms'), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including, without limitation, users who are browsers, vendors, customers, merchants, and/or contributors of content." />
          <UITypography text="Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service." />
          <UITypography text="Any new features or tools added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes." />
          <UITypography text="Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="SECTION X - PROMOTIONAL EVENTS" />
          <UITypography text="We may, at our discretion, offer special promotional events, including but not limited to free trial events, discounted trial sessions, or other time-limited offers. Participation in these events is subject to the following terms:" />

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Limited Availability: Promotional events are offered on a first-come, first-served basis and may have limited capacity." />
            </li>
            <li>
              <UITypography text="Registration Requirement: Some promotional events may require pre-registration. Failure to register may result in denied participation." />
            </li>
            <li>
              <UITypography text="Non-Transferable: Promotional event registrations and discounts are non-transferable and may not be exchanged for monetary value or credit toward future purchases." />
            </li>
            <li>
              <UITypography text="Event-Specific Terms: Additional terms and conditions may apply to each promotional event. These terms will be communicated during the registration process or at the time of the offer." />
            </li>
            <li>
              <UITypography text="Modification or Cancellation: Phoenix Sports reserves the right to modify or cancel any promotional event at any time, for any reason, without prior notice." />
            </li>
            <li>
              <UITypography text="Liability Disclaimer: Participation in promotional events is voluntary. Phoenix Sports is not responsible for any injury, loss, or damages incurred during these events." />
            </li>
          </ul>
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="NEW PROMOTIONAL EVENTS" />

          <div className="flex flex-col gap-4">
            <div>
              <UITypography
                variant="h6"
                text="1. FREE KIDS' ENRICHMENT EVENT"
                className="font-bold"
              />
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <UITypography text="Date: Wednesday, November 13" />
                </li>
                <li>
                  <UITypography text="Time: 9:30 AM - 11:30 AM" />
                </li>
                <li>
                  <UITypography text="Location: Laguna (Kelly) Park, Carlsbad" />
                </li>
                <li>
                  <UITypography text="Eligibility: Open to children aged 3-10" />
                </li>
                <li>
                  <UITypography text="Description: A complimentary two-hour event featuring sports, STEM activities, and martial arts." />
                </li>
                <li>
                  <UITypography text="Registration: Required through our website to secure a spot." />
                </li>
                <li>
                  <UITypography text="Terms: Participants acknowledge that Phoenix Sports is not liable for injuries or other incidents that may occur during the event." />
                </li>
              </ul>
            </div>

            <div>
              <UITypography
                variant="h6"
                text="2. WINTER SPORTS & FITNESS DEMO DAY"
                className="font-bold"
              />
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <UITypography text="Date: Saturday, December 14" />
                </li>
                <li>
                  <UITypography text="Time: 10:00 AM - 12:00 PM" />
                </li>
                <li>
                  <UITypography text="Location: Aviara Park, Carlsbad" />
                </li>
                <li>
                  <UITypography text="Eligibility: Open to children aged 3-10" />
                </li>
                <li>
                  <UITypography text="Description: A special demo event allowing kids to try out multiple sports and fitness activities." />
                </li>
                <li>
                  <UITypography text="Registration: Required in advance." />
                </li>
                <li>
                  <UITypography text="Terms: Limited spots available; Phoenix Sports reserves the right to modify or cancel the event at any time." />
                </li>
              </ul>
            </div>
          </div>

          <UITypography text="By participating in these promotional events, you agree to abide by these terms and any additional terms provided at the time of registration." />
          <UITypography text="For all other terms and conditions, please refer to our full Terms of Service document." />
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
