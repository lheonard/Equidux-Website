"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#" className="text-base font-medium text-black hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-base font-medium text-black hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="text-base font-medium text-black hover:text-primary transition-colors">Features</Link>
            <Link href="#" className="text-base font-medium text-black hover:text-primary transition-colors">Career</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <button className="text-base font-medium text-black bg-[#fafafa] hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-full">
              Download App
            </button>
            <button className="bg-black text-white text-base font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              Create Account
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black bg-[#fafafa] hover:bg-gray-100 transition-colors focus:outline-none p-2.5 rounded-full"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-white px-4 pt-6 pb-6 space-y-4 overflow-y-auto">
          <Link href="#" className="block px-3 py-2 text-base font-medium text-black">Home</Link>
          <Link href="#" className="block px-3 py-2 text-base font-medium text-black">About Us</Link>
          <Link href="#" className="block px-3 py-2 text-base font-medium text-black">Features</Link>
          <Link href="#" className="block px-3 py-2 text-base font-medium text-black">Career</Link>
          <div className="pt-8 flex flex-row gap-3">
            <button className="flex-1 text-center bg-[#fafafa] text-black text-[0.875rem] font-medium px-4 py-3.5 rounded-full hover:bg-gray-100 transition-colors">
              Download App
            </button>
            <button className="flex-1 text-center bg-black text-white text-[0.875rem] font-medium px-4 py-3.5 rounded-full hover:bg-gray-800 transition-colors">
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
