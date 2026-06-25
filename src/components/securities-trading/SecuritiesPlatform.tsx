import FadeIn from "../FadeIn";
import DualCTA from "../mutual-funds/DualCTA";

export default function SecuritiesPlatform() {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
              A platform your
              <br />
              portfolio can depend on
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-secondary mb-10 max-w-md mx-auto leading-[24px]">
              Built with security, transparency, and reliability at its core,
              Equidux is designed to protect and grow your wealth.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <DualCTA className="justify-center" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Row 1 */}
          <FadeIn delay={0.1} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] p-8 flex flex-col justify-end h-full min-h-[280px] lg:min-h-[320px]">
              <h3 className="text-[1.25rem] leading-[28px] font-bold text-gray-900 mb-16 tracking-[-0.02em]">
                SEC Licensed and Regulated
              </h3>
              <p className="text-text-secondary text-base font-medium tracking-[-0.02em] leading-[24px]">
                We operate under strict regulatory standards, ensuring your
                investments are protected and our operations are fully
                transparent.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] w-full h-full min-h-[280px] lg:min-h-[320px]" />
          </FadeIn>
          <FadeIn delay={0.3} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] p-8 flex flex-col justify-end h-full min-h-[280px] lg:min-h-[320px]">
              <h3 className="text-[1.25rem] leading-[28px] font-bold text-gray-900 mb-16 tracking-[-0.02em]">
                Real-Time Portfolio Tracking
              </h3>
              <p className="text-text-secondary text-base font-medium tracking-[-0.02em] leading-[24px]">
                Monitor your investments, track performance, and analyze your
                portfolio with our intuitive dashboard.
              </p>
            </div>
          </FadeIn>

          {/* Row 2 */}
          <FadeIn delay={0.4} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] w-full h-full min-h-[280px] lg:min-h-[320px]" />
          </FadeIn>
          <FadeIn delay={0.5} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] p-8 flex flex-col justify-end h-full min-h-[280px] lg:min-h-[320px]">
              <h3 className="text-[1.25rem] leading-[28px] font-bold text-gray-900 mb-16 tracking-[-0.02em]">
                Secure Transactions
              </h3>
              <p className="text-text-secondary text-base font-medium tracking-[-0.02em] leading-[24px]">
                Bank-level encryption and advanced security protocols ensure
                your funds and personal data are always protected.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.6} fullWidth>
            <div className="bg-surface-gray rounded-[1.5rem] w-full h-full min-h-[280px] lg:min-h-[320px]" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
