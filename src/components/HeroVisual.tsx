"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function HeroPlaceholder() {
  return (
    <div className="relative w-full flex items-center justify-center min-h-[360px] lg:min-h-[520px]">
      <div className="w-[55%] max-w-[280px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden">
        <div className="h-full bg-[#fafafa] p-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="h-3 w-14 bg-gray-200 rounded-full" />
            <div className="h-6 w-6 rounded-full bg-primary/20" />
          </div>
          <div>
            <div className="h-2.5 w-20 bg-gray-200 rounded mb-2" />
            <div className="h-7 w-36 bg-gray-900 rounded-md" />
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-100 p-3 space-y-2">
            <div className="h-2.5 w-full bg-gray-100 rounded" />
            <div className="h-2.5 w-4/5 bg-gray-100 rounded" />
            <div className="h-16 w-full bg-primary/10 rounded-lg mt-2" />
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-100"
              >
                <div className="w-6 h-6 rounded-full bg-gray-100" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-16 bg-gray-100 rounded" />
                  <div className="h-2 w-10 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const [heroSrc, setHeroSrc] = useState<string | null>(null);

  useEffect(() => {
    const resolveHero = () => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const path = isMobile ? "/hero-image-mobile.png" : "/hero-image.png";
      const probe = new window.Image();
      probe.onload = () => setHeroSrc(path);
      probe.onerror = () => setHeroSrc(null);
      probe.src = path;
    };

    resolveHero();
    const mq = window.matchMedia("(max-width: 1023px)");
    mq.addEventListener("change", resolveHero);
    return () => mq.removeEventListener("change", resolveHero);
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto relative">
      {heroSrc ? (
        <Image
          src={heroSrc}
          alt="Equidux App Interface"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      ) : (
        <HeroPlaceholder />
      )}
    </div>
  );
}
