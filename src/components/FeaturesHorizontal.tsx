"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function FeaturesHorizontal() {
  const features = [
    {
      title: "Multi-Market Access",
      description:
        "Access a diverse range of investment opportunities across NGX, NASD, and global markets from one platform.",
      image: "/features/multi-market.png",
    },
    {
      title: "Fast & Secure Transactions",
      description:
        "Experience lightning-fast trades and bank-level security for all your investment transactions.",
      image: "/features/fast-secure.png",
    },
    {
      title: "Q-Data Insights",
      description:
        "Leverage real-time market data and intelligent analytics to make informed investment decisions.",
      image: "/features/q-data.png",
    },
    {
      title: "Portfolio Management",
      description:
        "Track and manage your investments easily with comprehensive portfolio tools and reporting.",
      image: "/features/portfolio.png",
    },
  ];

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = document.getElementById("features-carousel");
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-feature-card]");
    const gap = 8;
    const scrollAmount = card ? card.offsetWidth + gap : 408;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col mb-12 lg:mb-16 relative">
          <div className="w-full max-w-2xl">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Everything you need to
                <br />
                invest smarter
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md leading-[24px]">
                A platform built to make wealth creation easy and accessible.
                Trade across multiple markets with confidence and clarity.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-[#fafafa] text-black text-[0.875rem] md:text-base font-medium hover:bg-gray-100 transition-colors">
                  Download App
                </button>
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors">
                  Create Account
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:flex items-center gap-4 absolute top-0 right-0">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Scroll to previous feature"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Scroll to next feature"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-[calc(100%-2rem)] after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
            <div
              id="features-carousel"
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-8 pr-6 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  data-feature-card
                  className="bg-[#fafafa] rounded-[1rem] pt-2 pb-5 px-2 flex flex-col flex-shrink-0 w-[min(340px,calc(100vw-3rem))] md:w-[min(360px,calc(50vw-1.5rem))] lg:w-[360px] snap-start"
                >
                  <div className="w-full aspect-[4/3] bg-white rounded-[1rem] mb-6 relative overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 px-4">
                    <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end lg:hidden items-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => scrollCarousel("prev")}
                className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Scroll to previous feature"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Scroll to next feature"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
