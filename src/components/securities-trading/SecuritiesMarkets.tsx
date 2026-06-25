import FadeIn from "../FadeIn";
import DualCTA from "../mutual-funds/DualCTA";
import FeatureCard from "../FeatureCard";

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
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-secondary mb-10 max-w-md mx-auto leading-[24px]">
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
            <FeatureCard
              title="Nigerian Stock Exchange"
              description="Invest in the local economy by buying shares in top Nigerian companies. Enjoy seamless trading, real-time market data, and instant execution on the NGX."
              textPosition="top"
            />
          </FadeIn>

          {/* Middle Card: Green Asset Placeholder */}
          <FadeIn delay={0.2} fullWidth>
            <div className="bg-primary rounded-[1.5rem] p-2 flex flex-col h-full min-h-[480px] lg:min-h-[520px] relative overflow-hidden items-center justify-center">
              <video
                src="/securities-trading.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.1]"
              />
            </div>
          </FadeIn>

          {/* Right Card: US Stock Market */}
          <FadeIn delay={0.3} fullWidth>
            <FeatureCard
              title="US Stock Market"
              description="Own a piece of the world's biggest brands. Access thousands of US stocks and ETFs, trade in fractional shares, and build a globally diversified portfolio."
              textPosition="bottom"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
