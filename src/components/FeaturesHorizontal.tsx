"use client";

import FadeIn from "./FadeIn";

export default function FeaturesHorizontal() {
  const features = [
    {
      title: "Multi-Market Access",
      description: "Access a diverse range of investment opportunities across multiple markets and asset classes."
    },
    {
      title: "Fast & Secure Transactions",
      description: "Experience lightning-fast trades and bank-level security for all your investment transactions."
    },
    {
      title: "Q-Data Insights",
      description: "Leverage our proprietary Q-Data analytics to make informed and strategic investment decisions."
    },
    {
      title: "Portfolio Management",
      description: "Track and manage your investments easily with our comprehensive portfolio tools."
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated round-the-clock customer support team."
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12 lg:mb-16">
          <div className="w-full max-w-2xl">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Everything You Need to<br />Invest Smarter
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md leading-[24px]">
                A platform built to make wealth creation easy and accessible to everyone. Invest in stocks, crypto, and more with ease.
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
        </div>

        {/* Carousel Container */}
        <FadeIn delay={0.3}>
          <div className="relative">
          <div id="features-carousel" className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {features.map((feature, index) => (
              <div key={index} className="bg-[#fafafa] rounded-[1rem] pt-2 pb-5 px-2 flex flex-col min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start">
                {/* Illustration placeholder */}
                <div className="w-full aspect-[4/3] bg-white rounded-[1rem] mb-6 flex items-center justify-center">
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

          {/* Mobile Carousel Arrows */}
          <div className="flex justify-end lg:hidden items-center gap-4 mt-6">
            <button 
              onClick={() => {
                const container = document.getElementById('features-carousel');
                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                const container = document.getElementById('features-carousel');
                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop Carousel Arrows */}
          <div className="hidden lg:flex items-center gap-4 absolute -top-24 right-0">
            <button 
              onClick={() => {
                const container = document.getElementById('features-carousel');
                if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                const container = document.getElementById('features-carousel');
                if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
