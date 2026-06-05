import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="pt-20 pb-10 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <FadeIn>
              <h1 className="text-[2rem] leading-[40px] lg:text-[3.5rem] lg:leading-[64px] font-bold tracking-[-0.03em] text-gray-900 mb-6">
                Invest Smarter.<br />
                Grow Confidently.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-base font-medium tracking-[-0.01em] text-[#414141] mb-8 max-w-lg leading-[24px]">
                Take control of your financial future with our intuitive platform. Invest in stocks, crypto, and more with ease.
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

            {/* Logo Section */}
            <FadeIn delay={0.3} fullWidth>
              <div className="w-full overflow-hidden mt-8">
                <p className="text-[0.875rem] font-medium text-[#A0A0A0] mb-6 tracking-[0.05em] uppercase">Partnered with</p>
                <div className="flex items-center gap-8 md:gap-12">
                  {/* Logos */}
                  <Image src="/logos/Frame 24.svg" alt="Partner Logo" width={74} height={25} className="h-6 w-auto object-contain" />
                  <Image src="/logos/Frame 29.svg" alt="Partner Logo" width={74} height={25} className="h-6 w-auto object-contain" />
                  <Image src="/logos/Mask group.svg" alt="Partner Logo" width={74} height={25} className="h-6 w-auto object-contain" />
                  <Image src="/logos/Mask group-1.svg" alt="Partner Logo" width={74} height={25} className="h-6 w-auto object-contain hidden sm:block" />
                  <Image src="/logos/Mask group-2.svg" alt="Partner Logo" width={74} height={25} className="h-6 w-auto object-contain hidden md:block" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn delay={0.2} direction="left" fullWidth>
              <div className="w-full max-w-[600px] mx-auto">
                <Image
                  src="/hero-image.png"
                  alt="Equidux App Interface"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain hidden lg:block"
                  priority
                />
                <Image
                  src="/hero-image-mobile.png"
                  alt="Equidux App Interface"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain lg:hidden"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
