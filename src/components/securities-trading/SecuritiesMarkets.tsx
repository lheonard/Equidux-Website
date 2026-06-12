import FadeIn from "../FadeIn";
import DualCTA from "../mutual-funds/DualCTA";

export default function SecuritiesMarkets() {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
              Markets built for every
              <br />
              investor
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-[#414141] mb-10 max-w-md mx-auto leading-[24px]">
              From stable income investments to global growth opportunities,
              Equidux gives you access to markets that match your goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <DualCTA className="justify-center" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Left Card: Nigerian Stock Exchange */}
          <FadeIn delay={0.1} fullWidth>
            <div className="relative bg-[#fafafa] rounded-[1.5rem] p-2 flex flex-col h-full min-h-[480px] lg:min-h-[520px]">
              <div className="absolute inset-0 bg-[#fafafa] rounded-[1.5rem]" />
              <div className="relative z-10 bg-white rounded-[1rem] p-6 flex flex-col mb-auto">
                <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                  Nigerian Stock Exchange
                </h3>
                <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                  Invest in the local economy by buying shares in top Nigerian
                  companies. Enjoy seamless trading, real-time market data, and
                  instant execution on the NGX.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Middle Card: Green Asset Placeholder */}
          <FadeIn delay={0.2} fullWidth>
            <div className="bg-primary rounded-[1.5rem] p-2 flex flex-col h-full min-h-[480px] lg:min-h-[520px]">
              {/* Asset will go here */}
            </div>
          </FadeIn>

          {/* Right Card: US Stock Market */}
          <FadeIn delay={0.3} fullWidth>
            <div className="relative bg-[#fafafa] rounded-[1.5rem] p-2 flex flex-col h-full min-h-[480px] lg:min-h-[520px]">
              <div className="absolute inset-0 bg-[#fafafa] rounded-[1.5rem]" />
              <div className="relative z-10 bg-white rounded-[1rem] p-6 flex flex-col mt-auto">
                <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
                  US Stock Market
                </h3>
                <p className="text-[#414141] text-base font-medium tracking-[-0.02em] leading-[24px]">
                  Own a piece of the world&apos;s biggest brands. Access
                  thousands of US stocks and ETFs, trade in fractional shares,
                  and build a globally diversified portfolio.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
