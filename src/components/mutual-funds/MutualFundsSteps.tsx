"use client";

import FadeIn from "../FadeIn";
import CarouselArrows from "./CarouselArrows";
import DualCTA from "./DualCTA";

export default function MutualFundsSteps() {
  const steps = [
    {
      title: "Create your account",
      description:
        "Sign up in minutes, complete your KYC, and get ready to start investing with confidence.",
    },
    {
      title: "Choose your funds",
      description:
        "Browse our range of mutual funds and pick the ones that match your goals and risk appetite.",
    },
    {
      title: "Fund your investment",
      description:
        "Transfer funds securely and watch your portfolio grow with professional management.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col mb-12 lg:mb-16 text-left">
          <div className="flex items-start justify-between gap-4 mb-0">
            <div className="w-full max-w-2xl">
              <FadeIn>
                <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                  Start investing in three simple steps
                </h2>
              </FadeIn>
            </div>
            <CarouselArrows
              carouselId="mutual-funds-steps"
              className="flex-shrink-0"
            />
          </div>
          <div className="w-full max-w-2xl">
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md leading-[24px]">
                Getting started is simple — no paperwork, no complexity. Just a
                straightforward path from sign-up to invested.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <DualCTA />
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-[calc(100%-2rem)] after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:block">
            <div
              id="mutual-funds-steps"
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-8 pr-6 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {steps.map((step) => (
                <div
                  key={step.title}
                  data-carousel-card
                  className="bg-[#fafafa] rounded-[1rem] pt-2 pb-5 px-2 flex flex-col flex-shrink-0 w-[min(340px,calc(100vw-3rem))] md:w-[min(360px,calc(50vw-1.5rem))] lg:w-[360px] snap-start"
                >
                  <div className="w-full aspect-[4/3] bg-white rounded-[1rem] mb-6" />
                  <div className="px-4">
                    <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
