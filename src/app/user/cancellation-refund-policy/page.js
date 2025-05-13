import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-3">
        {/* Title Section */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Cancellation and Refund Policy" />
          <UITypography
            variant="h6"
            text="Phoenix Sports Refund & Credit Policy"
            className="mt-10"
          />
          <UITypography text="(Updated 2/7/2025)" />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* General Policy */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="General Policy" />
          <UITypography text="All purchased camps/classes are eligible for a Phoenix Sports credit towards any event that Phoenix Sports hosts for your child or a sibling." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Refund Policy */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Refund Policy" />
          <UITypography text="At Phoenix Sports, we prioritize customer satisfaction and strive to accommodate your needs. Our refund policy is outlined below:" />

          <UITypography variant="h5" text="General Refund Guidelines" />
          <UITypography text="1. Dissatisfaction Refund: If you are not satisfied with our program, you may request a full refund." />
          <UITypography text="2. Unused Classes: If you have paid for a set number of classes and are unable to attend all of them, the unused classes can be applied to any other Phoenix Sports program." />

          <UITypography
            variant="h5"
            text="Promotional Offer for Participants from Other Programs"
          />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Free Trial: Currently enrolled in another soccer program? Receive a complimentary two-class trial with Phoenix Sports." />
            </li>
            <li>
              <UITypography text="Program Transfer Credit: If you continue with Phoenix Sports after the trial, we will credit the amount paid for your previous program towards our classes upon presentation of a valid receipt." />
            </li>
            <li>
              <UITypography text="Missed Classes Reimbursement: If you return to your original program after the trial and missed two classes due to scheduling conflicts, Phoenix Sports will reimburse you for those missed sessions upon proof of payment." />
            </li>
          </ul>
          <UITypography text="Note: To qualify for the above offers, appropriate documentation (receipts or proof of payment) is required." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Standard Refund Policy */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Standard Refund Policy" />
          <UITypography text="Refunds are NOT issued for:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Non-attendance of a scheduled class." />
            </li>
            <li>
              <UITypography text="Unscheduled class cancellations by Phoenix Sports." />
            </li>
            <li>
              <UITypography text="School site or field closures due to inclement weather, natural disasters, government emergencies, or health crises." />
            </li>
          </ul>
          <UITypography text="If a parent withdraws their child from a Phoenix Sports enrollment, a refund will be issued for the remaining unused sessions (except in cases mentioned above). Missed classes will be credited as a roll-over for future use." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Bundle Pack Refunds */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Bundle Pack Refunds" />
          <UITypography text="Non-refundable." />
          <UITypography variant="h5" text="Expiration:" />
          <UITypography text="8-class bundle: Expires in 8 months." />
          <UITypography text="15-class bundle: Expires in 8 months." />
          <UITypography variant="h5" text="Re-Credits:" />
          <UITypography text="No-shows without prior notice will not be re-credited." />
          <UITypography text="Class will be re-credited with at least 1-hour cancellation notice." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Just Not the Right Fit */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Just Not the Right Fit?" />
          <UITypography text="If you or your child do not enjoy the class or feel they are not ready for Phoenix Sports, we will process a prorated refund for the remaining unused classes." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Roll-Over Credits */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Roll-Over Credits" />
          <UITypography text="All paid and registered Phoenix Sports camps qualify for roll-over credits in case of absence for any reason." />
          <UITypography text="Applies when:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="The customer decides not to attend a paid camp." />
            </li>
            <li>
              <UITypography text="Phoenix Sports postpones a camp due to weather." />
            </li>
            <li>
              <UITypography text="Phoenix Sports is unable to host a camp." />
            </li>
            <li>
              <UITypography text="The weather is unfavorable." />
            </li>
          </ul>
          <UITypography text="Your purchased camp will NOT be lost and can be applied to any future Phoenix Sports program." />
          <UITypography variant="h5" text="Example Uses of Credits:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Missed a class? Apply the credit to another sport or subtract the class's dollar amount from a camp." />
            </li>
            <li>
              <UITypography text="Missed a soccer class? Register for the next 8-class session but only pay for 7 while attending all 8." />
            </li>
          </ul>
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Rain Outs */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Rain Outs" />
          <UITypography text="If it is raining 30-40 minutes before class and it is deemed unsafe to play, parents will receive a call or text notification of cancellation." />
          <UITypography variant="h5" text="Rescheduling:" />
          <UITypography text="The missed class will be added to the end of the session." />
          <UITypography text="Example: If an 8-week session (March 1 - April 19) has a rain cancellation on week 6, the new end date will be April 26." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Postponed Camps */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Postponed Camps" />
          <UITypography text="Cancellations due to weather or other unforeseen events will be decided 30-40 minutes before camp begins." />
          <UITypography variant="h5" text="Makeup Policy:" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="The missed camp/class will be added to the end of the session." />
            </li>
            <li>
              <UITypography text="If that's not possible, the credit can be applied to future programs." />
            </li>
          </ul>
          <UITypography text="You will never lose a purchased camp." />
          <UITypography text="Example: If you miss one class but want to register for an 8-class session, you pay for 7 but receive 8." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Full-Day & Half-Day Camps Refund Tiers */}
        <div className="flex flex-col gap-3">
          <UITypography
            variant="h3"
            text="Full-Day & Half-Day Camps Refund Tiers"
          />
          <UITypography text="All full/half-day camps qualify for roll-over credits." />

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Notice Period
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Refund Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">7+ days</td>
                  <td className="border border-gray-300 px-4 py-2">
                    100% refund
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">5 days</td>
                  <td className="border border-gray-300 px-4 py-2">
                    85% refund
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3 days</td>
                  <td className="border border-gray-300 px-4 py-2">
                    75% refund
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  <td className="border border-gray-300 px-4 py-2">
                    50% refund
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Day of (1 hour before or after start)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Camp Credit Only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <UITypography variant="h5" text="Day-Of Cancellation Credit" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <UITypography text="Can be applied to any full/half-day camp, school holiday camp, or other sports camp." />
            </li>
            <li>
              <UITypography text="Can be transferred to a sibling for another camp." />
            </li>
          </ul>

          <UITypography text="Example: If you cancel a $394 summer camp two hours before it starts, you can apply this credit to another camp or split it across multiple programs (e.g., an 8-week soccer session for $200, leaving $194 for another use)." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        {/* Choosing Not to Attend */}
        <div className="flex flex-col gap-3">
          <UITypography variant="h3" text="Choosing Not to Attend" />
          <UITypography text="If a Phoenix Sports camp is running and the customer chooses not to attend (due to weather, vacation, etc.), the payment is not refundable for that day. However, a credit can be issued for future use." />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-3 mt-8">
          <UITypography variant="h5" text="For questions, please contact:" />
          <UITypography text="📞 (760) 587-7452" />
          <UITypography text="📧 gophoenix@gophoenixsports.com" />
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
