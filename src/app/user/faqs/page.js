import UIAccordion from "@/components/UIAccordion/UIAccordion";
import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const Faqs = () => {
  const faqArr = [
    {
      question: "Is my child safe with Phoenix Sports?",
      answer: `Yes. Safety is our #1 priority. Our staff implements and adheres to very strict company safety policies.

All athletes are signed in and signed out by parents.
All staff is CPR/First Aid certified
All staff are CDC concussion trained. 
All staff are 18 years or older or have been cleared by local school district offices. 
All staff is subject to State and Federal background checks.
Staff inspect the recreation bathroom facilities before the children enter.
Staff keep eyes on the children at all times. 
`,
    },
    {
      question: "Is my child safe with Phoenix Sports?",
      answer: `Yes. Safety is our #1 priority. Our staff implements and adheres to very strict company safety policies.

All athletes are signed in and signed out by parents.
All staff is CPR/First Aid certified
All staff are CDC concussion trained. 
All staff are 18 years or older or have been cleared by local school district offices. 
All staff is subject to State and Federal background checks.
Staff inspect the recreation bathroom facilities before the children enter.
Staff keep eyes on the children at all times. 
`,
    },
    {
      question: "Is my child safe with Phoenix Sports?",
      answer: `Yes. Safety is our #1 priority. Our staff implements and adheres to very strict company safety policies.

All athletes are signed in and signed out by parents.
All staff is CPR/First Aid certified
All staff are CDC concussion trained. 
All staff are 18 years or older or have been cleared by local school district offices. 
All staff is subject to State and Federal background checks.
Staff inspect the recreation bathroom facilities before the children enter.
Staff keep eyes on the children at all times. 
`,
    },
    {
      question: "Is my child safe with Phoenix Sports?",
      answer: `<div>Yes. Safety is our #1 priority. Our staff implements and adheres to very strict company safety policies.</div>

All athletes are signed in and signed out by parents.
All staff is CPR/First Aid certified
All staff are CDC concussion trained. 
All staff are 18 years or older or have been cleared by local school district offices. 
All staff is subject to State and Federal background checks.
Staff inspect the recreation bathroom facilities before the children enter.
Staff keep eyes on the children at all times. 
`,
    },
  ];
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid  gap-3">
        <UITypography variant="h3" text="Frequently Asked Questions" />
        <UIAccordion arr={faqArr} />
      </div>
    </div>
  );
};

export default Faqs;
