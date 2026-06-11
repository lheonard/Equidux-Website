import Link from "next/link";

import FadeIn from "../FadeIn";
import DualCTA from "./DualCTA";

export default function MutualFundsChoose() {
  const funds = [
    {
      title: "Money Market Funds",
      description:
        "Low-risk funds designed for steady growth and easy access to your money when you need it.",
    },
    {
      title: "Dollar Funds",
      description:
        "Invest in USD-denominated funds to hedge against currency risk and access global opportunities.",
    },
    {
      title: "Balanced Funds",
      description:
        "A mix of equities and fixed income for investors seeking growth with moderate risk.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
              Choose our funds that
              <br />
              fits your goal
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md mx-auto leading-[24px]">
              Explore a range of mutual funds tailored to different risk
              appetites, time horizons, and financial goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <DualCTA className="justify-center" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {funds.map((fund, index) => (
            <FadeIn key={fund.title} delay={0.1 + index * 0.1} fullWidth>
              <div className="relative bg-[#fafafa] rounded-[1.5rem] p-2 flex flex-col h-full min-h-[520px]">
                {/* Asset behind it (placeholder) */}
                <div className="absolute inset-0 bg-[#fafafa] rounded-[1.5rem]" />
                
                {/* Text wrapped in white color */}
                <div className="mt-auto relative z-10 bg-white rounded-[1rem] p-6 flex flex-col">
                  <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                    {fund.title}
                  </h3>
                  <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px] mb-4">
                    {fund.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:text-primary-dark transition-colors mt-auto"
                  >
                    Start investing
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
