import FadeIn from "../FadeIn";
import DualCTA from "./DualCTA";

export default function MutualFundsSmarter() {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
              A smarter way to invest
              <br />
              without doing it alone
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md mx-auto leading-[24px]">
              Let professional fund managers handle the complexity while you
              benefit from diversified, SEC-regulated portfolios.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <DualCTA className="justify-center" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2">
          {/* Left Card: Image Top, Text Bottom */}
          <FadeIn delay={0.1} fullWidth>
            <div className="bg-[#fafafa] rounded-[1.5rem] p-2 flex flex-col h-full min-h-[560px]">
              <div className="w-full flex-1 bg-white rounded-[1rem] min-h-[200px]" />
              <div className="px-4 pt-8 pb-4">
                <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                  Affordability and Income
                </h3>
                <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                  Start with amounts that work for you and earn steady returns
                  through professionally managed portfolios.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Middle Column: Two Stacked Boxes */}
          <FadeIn delay={0.2} fullWidth>
            <div className="flex flex-col gap-2 lg:gap-2 h-full min-h-[560px]">
              <div className="w-full flex-1 bg-[#fafafa] rounded-[1.5rem] min-h-[180px]" />
              <div className="w-full flex-1 bg-primary rounded-[1.5rem] min-h-[180px]" />
            </div>
          </FadeIn>

          {/* Right Card: Text Top, Image Bottom */}
          <FadeIn delay={0.3} fullWidth>
            <div className="bg-[#fafafa] rounded-[1.5rem] p-2 flex flex-col h-full min-h-[560px]">
              <div className="px-4 pt-6 pb-8">
                <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                  Managed by Professionals
                </h3>
                <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                  Expert fund managers monitor markets daily so your portfolio
                  stays aligned with your goals.
                </p>
              </div>
              <div className="w-full flex-1 bg-white rounded-[1rem] min-h-[200px]" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
