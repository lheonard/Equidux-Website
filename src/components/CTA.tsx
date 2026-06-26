import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="py-10 lg:py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-[42px] max-w-7xl mx-auto">
        <FadeIn>
          <div className="bg-primary rounded-[1.5rem] py-6 px-6 lg:pl-10 lg:pr-6 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative w-full min-h-[440px]">
            <div className="relative z-10 w-full lg:w-1/2">
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-white mb-4">
                The Future of
                <br />
                Investing Starts Here
              </h2>
              <p className="text-white/90 text-[1rem] font-medium tracking-[-0.02em] leading-[24px] mb-10 max-w-md">
                Take control of your financial future with our intuitive
                platform. Invest across multiple markets with ease.
              </p>
              <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-white/25 text-white text-[0.875rem] md:text-base font-medium hover:bg-white/35 transition-colors">
                  Download App
                </button>
                <Link
                  href="https://app-dev.equidux.com/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors text-center"
                >
                  Create Account
                </Link>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-[45%] xl:w-[500px] flex justify-end h-full">
              <div className="w-full h-full min-h-[250px] lg:min-h-[400px] bg-white/20 rounded-[1rem]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
