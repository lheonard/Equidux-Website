"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import FadeIn from "../FadeIn";
import CarouselArrows from "./CarouselArrows";
import DualCTA from "./DualCTA";

interface Step {
  title: string;
  description: string;
  video: string;
  defaultTime: number; // The timestamp (in seconds) to show when paused
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Detect when the card is at least 60% visible in the viewport
  const isInView = useInView(containerRef, { amount: 0.6 }); 
  
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we are on a mobile/tablet screen (lg breakpoint in Tailwind is 1024px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Control video playback based on device type and state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (!isMobile && !isHovered) {
        video.currentTime = step.defaultTime;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // On mobile: play if in view. On desktop: play if hovered.
    const shouldPlay = isMobile ? isInView : isHovered;

    if (shouldPlay) {
      video.play().catch(() => {
        // Catch autoplay restrictions if any
      });
    } else {
      video.pause();
      if (!isMobile && video.readyState >= 1) { // HAVE_METADATA
        // Reset to the specific default frame when not hovered
        video.currentTime = step.defaultTime;
      }
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [isMobile, isInView, isHovered, step.defaultTime]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-carousel-card
      className="bg-surface-gray rounded-[1rem] pt-2 pb-5 px-2 flex flex-col flex-shrink-0 w-[min(340px,calc(100vw-3rem))] md:w-[min(360px,calc(50vw-1.5rem))] lg:w-[360px] snap-start cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="w-full aspect-[4/3] bg-[#7ED442] rounded-[1rem] mb-6 relative overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={step.video}
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
      <div className="px-4">
        <span className="inline-block text-sm font-semibold text-primary mb-2">
          Step {index + 1}
        </span>
        <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
          {step.title}
        </h3>
        <p className="text-text-secondary text-base font-medium tracking-[-0.02em] leading-[24px]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function MutualFundsSteps() {
  const steps: Step[] = [
    {
      title: "Create your account",
      description:
        "Sign up in minutes, complete your KYC, and get ready to start investing with confidence.",
      video: "/steps/create-account.webm",
      defaultTime: 2, // 0:02
    },
    {
      title: "Verify your account",
      description:
        "Complete a quick identity verification so your account is secure and ready to invest.",
      video: "/steps/verify-account.webm",
      defaultTime: 1.8, // 1.8 seconds
    },
    {
      title: "Choose your funds",
      description:
        "Browse our range of mutual funds and pick the ones that match your goals and risk appetite.",
      video: "/steps/select-fund.webm",
      defaultTime: 2, // 0:02
    },
    {
      title: "Fund your investment",
      description:
        "Transfer funds securely and watch your portfolio grow with professional management.",
      video: "/steps/fund-investment.webm",
      defaultTime: 1, // 0:01
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col mb-12 lg:mb-16 text-left">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="w-full max-w-2xl">
              <FadeIn>
                <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-0">
                  Start investing in four
                  <br />
                  simple steps.
                </h2>
              </FadeIn>
            </div>
            <div className="hidden lg:block">
              <CarouselArrows
                carouselId="mutual-funds-steps"
                className="flex-shrink-0"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-secondary mb-10 max-w-md leading-[24px]">
                Getting started is simple — no paperwork, no complexity. Just a
                straightforward path from sign-up to invested.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <DualCTA />
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-[calc(100%-2rem)] after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:block">
            <div
              id="mutual-funds-steps"
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-8 pr-6 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {steps.map((step, index) => (
                <StepCard key={step.title} step={step} index={index} />
              ))}
            </div>

            <div className="flex justify-end lg:hidden items-center gap-4 mt-6">
              <CarouselArrows
                carouselId="mutual-funds-steps"
                className="flex"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
