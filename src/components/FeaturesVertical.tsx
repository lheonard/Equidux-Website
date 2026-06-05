import FadeIn from "./FadeIn";

export default function FeaturesVertical() {
  const features = [
    {
      subtitle: "1. Real Estate",
      title: "Invest in fractional Real Estate",
      description: "Own a piece of premium real estate without the hassle of property management. Start building your portfolio with ease.",
      bullets: ["Fractional ownership starting at $100", "Earn rental income and capital appreciation"]
    },
    {
      subtitle: "2. Global Markets",
      title: "Access Global Market Opportunities",
      description: "Diversify your portfolio by investing in international markets. Access top-performing stocks and ETFs worldwide.",
      bullets: ["Trade in 20+ international markets", "Real-time currency conversion and low fees"]
    },
    {
      subtitle: "3. Q-Data Insights",
      title: "Guide Returns With Q-Data",
      description: "Make informed decisions with our proprietary Q-Data analytics. Get actionable insights and market trends.",
      bullets: ["Advanced market analytics and trends", "Personalized investment recommendations"]
    },
    {
      subtitle: "4. Managed Portfolios",
      title: "Professionally Managed Investments",
      description: "Let our experts handle your investments. Choose from a range of professionally managed portfolios tailored to your goals.",
      bullets: ["Expertly curated portfolios", "Automated rebalancing and risk management"]
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Section - Text */}
          <div className="w-full max-w-2xl">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Invest across different<br />market opportunities
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md leading-[24px]">
                Always stay ahead of the game with our intuitive platform. Invest in stocks, crypto, and more with ease.
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

          {/* Bottom Section - Stacked Cards */}
          <div className="w-full flex flex-col gap-6 relative">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#fafafa] rounded-[1rem] p-6 lg:py-6 lg:pl-10 lg:pr-6 flex flex-col lg:flex-row gap-8 min-h-[440px] sticky transition-all duration-300"
                style={{ top: `calc(120px + ${index * 24}px)` }}
              >
                <div className="flex-1 flex flex-col justify-center py-2 lg:py-0">
                  <span className="text-[#7FD148] font-semibold text-[0.85rem] tracking-[-0.02em] mb-4 block">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                  <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px] mb-5 max-w-xl">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7FD148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image/Illustration Box */}
                <div className="w-full lg:w-[45%] xl:w-[500px] bg-white rounded-2xl flex-shrink-0 min-h-[300px] lg:min-h-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
