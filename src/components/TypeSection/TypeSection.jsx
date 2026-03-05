import React from "react";
import { Check, X } from "lucide-react";

const TypeSection = () => {
  const features = [
    "Full Credits + $0 Extra Fees",
    "Shorter 8-9 Weeks (No Burnout)",
    "Unlimited Flexible Make-ups",
    "Pay-Per-Class Flexibility",
    "We understand LIFE happens",
  ];

  const negatives = [
    "No Credits + Hidden Fees",
    "Locked into Long Seasons",
    "Limited or No Make-ups",
    '"Fake" Low-Cost Monthly Traps',
    "Zero Flexibility for Busy Families",
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Phoenix Sports - Left Column */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-3xl font-bold text-black">Phoenix Sports</h3>
            <span className="text-4xl">😊</span>
          </div>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-green-500 mt-1" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-base">{feature}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span className="block h-px w-12 bg-gray-300"></span>
              <span className="flex-shrink-0 text-xs">-----------</span>
              <span className="block h-px w-12 bg-gray-300"></span>
            </div>
          </div>
        </div>

        {/* The Other Guys - Right Column */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-3xl font-bold text-black">The Other Guys</h3>
            <span className="text-4xl">😞</span>
          </div>

          <div className="space-y-4">
            {negatives.map((negative, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <X className="w-6 h-6 text-red-500 mt-1" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-base">{negative}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span className="block h-px w-12 bg-gray-300"></span>
              <span className="flex-shrink-0 text-xs">-----------</span>
              <span className="block h-px w-12 bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeSection;
