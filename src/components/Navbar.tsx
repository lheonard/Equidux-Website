"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CompanyMenuPanel from "./CompanyMenuPanel";

type MobileView = "main" | "company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("main");
  const [companyOpen, setCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);

  const closeMobile = () => {
    setIsOpen(false);
    setMobileView("main");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileView("main");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex items-center justify-between h-20 relative">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={closeMobile}>
              <Image
                src="/logo.svg"
                alt="Equidux Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-base font-medium text-black hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-black hover:text-primary transition-colors"
            >
              Learn
            </Link>

            <div
              ref={companyRef}
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompanyOpen((open) => !open)}
                className="flex items-center gap-1.5 text-base font-medium text-black hover:text-primary transition-colors"
                aria-expanded={companyOpen}
                aria-haspopup="true"
              >
                Company
                <span className="w-5 h-5 rounded-full bg-[#f1f1f1] flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <CompanyMenuPanel
                    variant="dropdown"
                    onItemClick={() => setCompanyOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <button className="text-base font-medium text-black bg-[#fafafa] hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-full">
              Download App
            </button>
            <button className="bg-black text-white text-base font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              Create Account
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black bg-[#fafafa] hover:bg-gray-100 transition-colors focus:outline-none w-8 h-8 flex items-center justify-center rounded-full"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-white px-4 pt-6 pb-8 overflow-y-auto">
          {mobileView === "main" ? (
            <div className="flex flex-col w-full">
              <div className="space-y-6">
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="block text-xl font-semibold text-black"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={closeMobile}
                  className="block text-xl font-semibold text-black"
                >
                  Learn
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileView("company")}
                  className="flex w-full items-center justify-between text-xl font-semibold text-black"
                >
                  Company
                  <span className="w-6 h-6 rounded-full bg-[#f1f1f1] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex flex-col w-full gap-3 pt-8">
                <button className="w-full text-center bg-[#fafafa] text-black text-base font-bold px-4 py-4 rounded-full hover:bg-gray-100 transition-colors">
                  Download App
                </button>
                <button className="w-full text-center bg-black text-white text-base font-bold px-4 py-4 rounded-full hover:bg-gray-800 transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <button
                type="button"
                onClick={() => setMobileView("main")}
                className="flex items-center gap-2 text-base font-bold text-[#414141] mb-6"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>

              <CompanyMenuPanel variant="mobile" onItemClick={closeMobile} />
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
