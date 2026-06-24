import Image from "next/image";

import FadeIn from "./FadeIn";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="pt-24 pb-10 lg:pt-32 lg:pb-16 overflow-hidden min-h-[100dvh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <FadeIn>
              <h1 className="text-[2.5rem] leading-[48px] sm:text-[2.75rem] sm:leading-[52px] lg:text-[3.5rem] lg:leading-[64px] font-bold tracking-[-0.03em] text-gray-900 mb-6">
                Invest Smarter.
                <br />
                Grow Confidently.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base font-medium tracking-[-0.01em] text-[#414141] mb-8 max-w-lg leading-[24px]">
                Access powerful investing tools, real-time market insights, and
                seamless trading experiences across mobile and web.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} fullWidth>
              <div className="flex flex-row items-center gap-4 w-full sm:w-auto mb-12">
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-[#fafafa] text-black text-[0.875rem] md:text-base font-medium hover:bg-gray-100 transition-colors">
                  Download App
                </button>
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors">
                  Create Account
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} fullWidth>
              <div className="w-full overflow-hidden mt-8">
                <p className="text-[0.75rem] font-semibold text-[#A0A0A0] mb-6 tracking-[0.08em] uppercase">
                  Partner with top Nigerian companies
                </p>
                <div className="flex items-center gap-8 md:gap-12 opacity-60 grayscale">
                  <Image
                    src="/logos/Frame 24.svg"
                    alt="Partner logo"
                    width={74}
                    height={25}
                    className="h-6 w-auto object-contain"
                  />
                  <Image
                    src="/logos/Mask group.svg"
                    alt="Partner logo"
                    width={74}
                    height={25}
                    className="h-6 w-auto object-contain"
                  />
                  <Image
                    src="/logos/Mask group-1.svg"
                    alt="Partner logo"
                    width={74}
                    height={25}
                    className="h-6 w-auto object-contain hidden sm:block"
                  />
                  <Image
                    src="/logos/Mask group-2.svg"
                    alt="Partner logo"
                    width={74}
                    height={25}
                    className="h-6 w-auto object-contain hidden md:block"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn delay={0.2} direction="left" fullWidth>
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
