import FadeIn from "./FadeIn";

export default function FeaturesVertical() {
  const features = [
    {
      subtitle: "LOCAL STOCK MARKET",
      title: "Invest in Leading Local Companies",
      description:
        "Build wealth by investing in top-performing companies listed on the Nigerian Exchange and other local markets.",
      bullets: [
        "Access NGX and NASD listed securities",
        "Real-time local market data and insights",
      ],
    },
    {
      subtitle: "US STOCK MARKET",
      title: "Access Global Market Opportunities",
      description:
        "Diversify beyond borders with seamless access to US equities on NASDAQ, NYSE, and other global exchanges.",
      bullets: [
        "Trade US stocks from a single platform",
        "Competitive FX rates and low fees",
      ],
    },
    {
      subtitle: "FIXED INCOME",
      title: "Stable Returns With Lower Risk",
      description:
        "Grow your portfolio steadily with government and corporate bonds designed for predictable, lower-risk returns.",
      bullets: [
        "Treasury bills and corporate bonds",
        "Flexible tenures to match your goals",
      ],
    },
    {
      subtitle: "MANAGED FUNDS",
      title: "Professionally Managed Investments",
      description:
        "Let expert fund managers handle the complexity while you benefit from diversified, professionally curated portfolios.",
      bullets: [
        "Expertly managed mutual funds",
        "Automated rebalancing and reporting",
      ],
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="w-full max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Invest across different
                <br />
                market opportunities
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md mx-auto leading-[24px]">
                Access multiple investment options designed to help you grow,
                diversify, and manage your portfolio with confidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-[#fafafa] text-black text-[0.875rem] md:text-base font-medium hover:bg-gray-100 transition-colors">
                  Download App
                </button>
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors">
                  Create Account
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="w-full flex flex-col gap-6 relative">
            {features.map((feature, index) => (
              <div
                key={feature.subtitle}
                className="bg-[#fafafa] rounded-[1rem] p-6 lg:py-6 lg:pl-10 lg:pr-6 flex flex-col lg:flex-row gap-8 min-h-[440px] sticky transition-all duration-300"
                style={{ top: `calc(120px + ${index * 24}px)` }}
              >
                <div className="flex-1 flex flex-col justify-center py-2 lg:py-0">
                  <span className="text-primary font-semibold text-[0.75rem] tracking-[0.04em] mb-4 block uppercase">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                  <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px] mb-5 max-w-xl">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[45%] xl:w-[500px] bg-white rounded-2xl flex-shrink-0 min-h-[300px] lg:min-h-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
