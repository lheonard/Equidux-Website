"use client";

import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="w-full max-w-[600px] mx-auto relative flex items-center justify-center min-h-[360px] lg:min-h-[520px]">
      
      {/* The Container with the requested dimensions */}
      <div className="relative w-full max-w-[600px] aspect-square bg-surface-gray rounded-[2.5rem] overflow-hidden flex items-center justify-center">
        
        {/* The Green Glow (Inside the container) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center w-full">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* The Video */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <video
            src="/hero-vid.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.1]"
          />
        </div>

      </div>
    </div>
  );
}
