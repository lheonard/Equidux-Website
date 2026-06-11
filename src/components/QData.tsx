import FadeIn from "./FadeIn";

export default function QData() {
  const features = [
    {
      title: "Live Prices & Charts",
      description:
        "Track real-time prices, interactive charts, and market movements as they happen.",
    },
    {
      title: "Market News & Analysis",
      description:
        "Stay informed with curated news, expert commentary, and timely market analysis.",
    },
    {
      title: "Deep Company Research",
      description:
        "Access comprehensive company profiles, financials, and research to invest with confidence.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
              Introducing Q-Data
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md mx-auto leading-[24px]">
              Our proprietary analytics engine that helps you make smarter
              investment decisions and stay ahead of the market.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <button className="px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors">
              Explore Q-Data
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-[#111111] rounded-[1.5rem] p-4 overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row justify-between bg-[#1A1A1A] rounded-[1rem] p-6 lg:py-2 lg:pl-10 lg:pr-2 mb-2 gap-8">
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold text-white mb-4 tracking-[-0.02em]">
                  Market Intelligence
                  <br />
                  at Your Fingertips
                </h3>
                <p className="text-[#A0A0A0] text-[1rem] font-medium tracking-[-0.02em] leading-[22px] max-w-md">
                  Q-Data analyzes millions of data points to provide you with
                  actionable insights and personalized recommendations, giving
                  you the edge you need to succeed.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-end h-full">
                <div className="w-full h-full min-h-[250px] lg:min-h-[400px] bg-primary rounded-[1rem] relative overflow-hidden" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={0.4 + index * 0.1}>
                  <div className="bg-[#1A1A1A] rounded-[1rem] p-6 lg:p-8 flex flex-col min-h-[280px] lg:min-h-[400px]">
                    <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center mb-auto">
                      <span className="text-white text-[0.875rem] font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[1.125rem] leading-[24px] font-bold text-white mb-2 tracking-[-0.02em]">
                        {feature.title}
                      </h4>
                      <p className="text-[#A0A0A0] text-[0.875rem] font-medium tracking-[-0.02em] leading-[22px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
