import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  minHeight?: string;
  textPosition?: "top" | "bottom";
  className?: string;
  children?: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  minHeight = "min-h-[480px] lg:min-h-[520px]",
  textPosition = "bottom",
  className = "",
  children,
}: FeatureCardProps) {
  return (
    <div
      className={`relative bg-surface-gray rounded-[1.5rem] p-2 flex flex-col h-full ${minHeight} ${className}`}
    >
      {/* Background asset area */}
      <div className="absolute inset-0 bg-surface-gray rounded-[1.5rem]" />

      {/* Text Content */}
      <div
        className={`relative z-10 bg-white rounded-[1rem] p-6 flex flex-col ${
          textPosition === "bottom" ? "mt-auto" : "mb-auto"
        }`}
      >
        <h3 className="text-[1.5rem] leading-[29px] font-bold text-gray-900 mb-3 tracking-[-0.02em]">
          {title}
        </h3>
        <p className="text-text-secondary text-base font-medium tracking-[-0.02em] leading-[24px]">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
