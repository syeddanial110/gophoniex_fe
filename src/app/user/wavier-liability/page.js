import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const WavierLiability = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[90%] md:w-[70%] grid gap-6">
        {/* Waiver of Liability */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Waiver of Liability" />
          <UITypography
            variant="h5"
            text="Waiver of Liability, Assumption of Risk, and Indemnity Agreement"
          />
          <UITypography text="In return for my child (listed below) being permitted to participate in the following activity or program (“The Activity”), I and any personal representatives, assigns, heirs, and next of kin agree to the following: I understand the nature of The Activity and believe that my child is qualified, in good health, and in proper physical condition to participate in The Activity. I acknowledge that if I believe any conditions are unsafe, I will immediately discontinue my child’s participation in The Activity." />
          <hr className="mt-6" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <UITypography
            variant="h5"
            text="Description of Activity or Program"
          />
          <UITypography text="A youth sports program run by Phoenix Sports, Inc., for children between the ages of 2-12 that includes but is not limited to soccer, baseball, basketball, volleyball, football, lacrosse, and track & field." />
          <hr className="mt-6" />
        </div>

        {/* Assumption of Risks */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Assumption of Risks" />
          <UITypography text="Participation in The Activity carries with it certain inherent risks that cannot be eliminated regardless of the care taken to avoid injuries. The specific risks vary but include 1) minor injuries such as scratches, bruises, and sprains, 2) major injuries such as eye injury or loss of sight, joint or back injuries, heart attacks, and concussions, and 3) catastrophic injuries including paralysis and death." />
          <hr className="mt-6" />
        </div>

        {/* Attestation */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Attestation" />
          <UITypography text="I certify that my child is physically fit to take part in The Activity, has sufficiently prepared or trained, and has not been advised otherwise by a qualified medical professional. I assume all risks associated with my child’s participation in The Activity, including but not limited to: falls, contact with other participants, the effects of weather, including high heat and/or humidity, traffic, and the conditions of the activity location, all such risks being known and appreciated by me." />
          <hr className="mt-6" />
        </div>

        {/* Indemnification */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Indemnification and Hold Harmless" />
          <UITypography text="I agree to indemnify and hold harmless Phoenix Sports, Inc. and its agents and employees from any and all claims, actions, suits, procedures, costs, expenses, damages, and liabilities including attorney’s fees arising out of my child’s involvement in The Activity and to reimburse them for any such expenses incurred." />
          <hr className="mt-6" />
        </div>

        {/* Severability */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Severability" />
          <UITypography text="The undersigned further expressly agrees that the foregoing waiver and assumption of risks agreement is intended to be as broad and inclusive as is permitted by the law of the State of California and that if any portion is held invalid, the remainder will continue in full legal force and effect." />
          <hr className="mt-6" />
        </div>

        {/* Governing Law */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Governing Law and Jurisdiction" />
          <UITypography text="This Agreement shall be governed by and construed in accordance with the laws of the State of California. Any dispute arising under or related to this Agreement shall be brought exclusively in the state or federal courts located in California." />
          <hr className="mt-6" />
        </div>

        {/* Acknowledgment */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="Acknowledgment of Understanding" />
          <UITypography text="I have read this agreement, fully understand its terms, and understand that I am giving up substantial rights, including my right to sue. I acknowledge that I am signing this agreement freely and voluntarily, and intend by my signature to be a complete and unconditional release of all liability to the greatest extent allowed by law." />
          <hr className="mt-6" />
        </div>

        {/* Concussion Protocol */}
        <div className="flex flex-col gap-3">
          <UITypography
            variant="h3"
            text="Traumatic Brain Injury & Concussion Protocol"
          />
          <UITypography text="All Phoenix Sports, Inc. staff are CPR and AED certified and trained to recognize and act upon the CDC Action Plan for concussion protocol. In accordance with CA AB1, a concussion and head injury information sheet shall be signed and returned by the athlete and parent/guardian annually before initiating practice or competition. All parents/guardians are required to review the CDC Action Plan and submit acknowledgment during the registration process." />
          <UITypography text="If a child is suspected of having a concussion, they will be removed from The Activity and will not be permitted to return without written clearance from a licensed healthcare provider. Any signs of a possible traumatic brain injury (e.g., vomiting, loss of consciousness, seizure) will result in a 911 call and activation of EMS protocol. Parents will be contacted immediately." />
          <hr className="mt-6" />
        </div>

        {/* Image Release */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Minor (Child) Image Release" />
          <UITypography text="I grant Phoenix Sports, Inc. the right to take photographs, videos, and/or digital images of my child during participation in The Activity for use in promotional materials including, but not limited to, websites, flyers, and social media. I understand that no compensation will be provided for the use of such images and that Phoenix Sports, Inc. will own the images." />
          <hr className="mt-6" />
        </div>

        {/* Refund Policy */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Cancelation & Refund Policy" />
          <UITypography text="I have read and agree to the Phoenix Sports, Inc. Refund and Cancelation Policy as posted on the organization’s website. I understand that Phoenix Sports, Inc. reserves the right to modify, reschedule, or cancel sessions due to weather, facility conflicts, or other unforeseen circumstances and that refunds may not be issued unless explicitly stated in the posted policy." />
          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default WavierLiability;
