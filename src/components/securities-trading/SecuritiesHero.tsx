import FadeIn from "../FadeIn";

export default function SecuritiesHero() {
  return (
    <section className="pt-24 pb-10 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <FadeIn>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#fafafa] text-sm font-medium text-[#414141] mb-3">
                Securities Trading <span className="mx-2 text-[#A0A0A0]">•</span> Global Markets
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-[2.5rem] leading-[48px] sm:text-[2.75rem] sm:leading-[52px] lg:text-[3.5rem] lg:leading-[64px] font-bold tracking-[-0.03em] text-gray-900 mb-6">
                Trade on the world&apos;s
                <br />
                leading exchanges
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base font-medium tracking-[-0.01em] text-[#414141] mb-8 max-w-lg leading-[24px]">
                Access local and international stock markets, buying and selling
                shares of top companies in the US and Nigeria with confidence
                and ease.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn delay={0.2} direction="left" fullWidth>
              <div className="w-full max-w-[600px] aspect-[4/3] bg-[#fafafa] rounded-[1.5rem]" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
