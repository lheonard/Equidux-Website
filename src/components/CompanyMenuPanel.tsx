import Image from "next/image";
import Link from "next/link";

import { companyMenuItems } from "@/lib/nav";

type CompanyMenuPanelProps = {
  variant?: "dropdown" | "mobile";
  onItemClick?: () => void;
};

export default function CompanyMenuPanel({
  variant = "dropdown",
  onItemClick,
}: CompanyMenuPanelProps) {
  const isMobile = variant === "mobile";

  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 pt-2 w-full">
        <div className="space-y-8">
          {companyMenuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={onItemClick}
              className="flex items-start gap-4 group w-full"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="min-w-0 max-w-[260px]">
                <h4 className="text-base font-bold text-black leading-[20px] group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-text-secondary leading-[20px] mt-1">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-[1rem] overflow-hidden bg-[#D4EDB8] relative min-h-[420px] w-full flex flex-col justify-end">
          <Image
            src="/dropdown/parent-company-building.png"
            alt="ARM parent company building"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="relative z-10 m-3 bg-white rounded-[0.75rem] p-5">
            <h4 className="text-base font-bold text-black leading-[20px]">
              Our Parent Company
            </h4>
            <p className="text-sm font-medium text-text-secondary leading-[20px] mt-1 mb-3">
              Backed by decades of expertise and financial strength.
            </p>
            <Link
              href="https://www.apel.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-[min(720px,calc(100vw-2rem))] min-h-[328px] rounded-[1rem] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 bg-white">
      <div className="flex-1 py-5 px-5 flex flex-col justify-center space-y-2">
        {companyMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={onItemClick}
            className="flex items-start gap-3 py-3 px-2 rounded-xl hover:bg-surface-gray transition-colors group"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <Image
                src={item.icon}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-black leading-[20px] group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-text-secondary leading-[20px]">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-[42%] min-w-[240px] relative self-stretch overflow-hidden bg-[#D4EDB8]">
        <Image
          src="/dropdown/parent-company-building.png"
          alt="ARM parent company building"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="300px"
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
          <div className="bg-white rounded-[0.75rem] p-3.5">
            <h4 className="text-base font-bold text-black leading-[20px]">
              Our Parent Company
            </h4>
            <p className="text-sm font-medium text-text-secondary leading-[20px] mt-0.5 mb-2">
              Backed by decades of expertise and financial strength.
            </p>
            <Link
              href="https://www.apel.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
