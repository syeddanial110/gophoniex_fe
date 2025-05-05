import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const OtherProgramSwitch = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-3">
        {/* Main Title */}
        <div className="flex flex-col gap-3">
          <UITypography
            variant="h3"
            text="2 FREE classes. Stay with us? We'll roll over your fees!"
          />
          <UITypography
            text="Already signed up for another soccer program like Soccer Shots, Soccer Kids, Little Rascalz, or another league? Try Phoenix Sports with 2 FREE classes—no commitment! ⚽💥"
            className="text-lg"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* How It Works */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Here's How It Works:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="✅ Get 2 FREE trial classes—just show up and play!" />
            </li>
            <li>
              <UITypography text="✅ Love it? We'll transfer the value of your remaining paid classes from your previous program to Phoenix Sports—just provide a receipt! 💰" />
            </li>
            <li>
              <UITypography text="✅ Not the right fit? If our trial overlapped with your other program and you missed 2 classes, we'll reimburse you for those missed sessions—receipt required!" />
            </li>
          </ul>
          <UITypography
            text="📍 Claim your 2 free classes today! Don't miss out—come experience the Phoenix Sports difference! 🚀"
            className="font-semibold"
          />
          <UITypography
            text="DM us or sign up with this form"
            className="text-blue-600 hover:underline cursor-pointer"
          />
          <UITypography
            text="🚨 Limited Time Offer! Must provide proof of enrollment from your original program. Terms apply."
            className="text-sm italic"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Example Section */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Example: How This Promotion Works" />
          <UITypography text="You signed up for 8 classes with another program and already attended 1 class with them." />

          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <UITypography text="You come to Phoenix Sports for 2 FREE trial classes—no commitment!" />
            </li>
            <li>
              <UITypography text="You love it and decide to stay!" />
            </li>
            <li>
              <UITypography text="Since you originally had 8 classes with the other program and used 1 class, you have 7 classes left that can roll over to Phoenix Sports with proof of purchase." />
            </li>
          </ol>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="✔️ In total, you now have 9 classes with Phoenix Sports—2 free + 7 from your previous program!" />
            </li>
            <li>
              <UITypography text="💥 That means you actually get more classes just for giving us a shot!" />
            </li>
          </ul>

          <UITypography variant="h5" text="📍 How to Claim:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="✅ Sign up for your 2 FREE trial classes" />
            </li>
            <li>
              <UITypography text="✅ Show us your receipt from your current soccer program" />
            </li>
            <li>
              <UITypography text="✅ Stay with us and keep playing with extra classes!" />
            </li>
          </ul>

          <UITypography
            text="sign up with this form"
            className="text-blue-600 hover:underline cursor-pointer"
          />
          <UITypography
            text="Try us risk-free today! 🚀"
            className="font-semibold"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Policy Section */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Phoenix Sports Promotional Policy" />
          <UITypography text="Phoenix Sports is excited to offer a limited-time promotion for families currently enrolled in another soccer program. This special offer is designed exclusively for children who are actively registered in a soccer program other than Phoenix Sports." />

          <UITypography variant="h5" text="Promotion Details:" />
          <UITypography
            variant="h6"
            text="Free Trial Offer:"
            className="font-semibold"
          />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Players currently enrolled in another soccer program (e.g., Soccer Shots, Soccer Kids, Little Rascalz) are eligible for two free trial classes at Phoenix Sports." />
            </li>
            <li>
              <UITypography text="No commitment is required to participate in the trial." />
            </li>
          </ul>

          <UITypography
            variant="h6"
            text="Program Transfer Credit:"
            className="font-semibold"
          />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="If the participant chooses to continue with Phoenix Sports after the trial, we will apply a credit equal to the amount already paid to their previous soccer program." />
            </li>
            <li>
              <UITypography text="A valid receipt or proof of payment from the original program is required to claim the credit." />
            </li>
          </ul>

          <UITypography
            variant="h6"
            text="Missed Class Reimbursement:"
            className="font-semibold"
          />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="If a participant decides to return to their original program after completing the free trial, Phoenix Sports will reimburse the cost of up to two missed classes from their original program, if scheduling conflicts caused them to miss sessions." />
            </li>
            <li>
              <UITypography text="A valid receipt or proof of payment from the original program is required to claim reimbursement." />
            </li>
          </ul>

          <UITypography variant="h5" text="Terms & Conditions:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="This offer is only available to new customers who provide proof of active enrollment in another soccer program." />
            </li>
            <li>
              <UITypography text="Reimbursement is limited to two missed classes and must be claimed within 14 days of completing the free trial." />
            </li>
            <li>
              <UITypography text="Promotional credits cannot be exchanged for cash and are only applicable toward Phoenix Sports programs." />
            </li>
            <li>
              <UITypography text="Phoenix Sports reserves the right to modify or cancel this promotion at any time." />
            </li>
          </ul>

          <UITypography
            text="For questions or to claim this offer, please contact us at gophoenix@gophoenixsports.com"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherProgramSwitch;
