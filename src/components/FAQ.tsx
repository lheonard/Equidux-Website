"use client";

import { useState } from "react";

import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Simply download the Equidux app from the App Store or Google Play, create an account, verify your identity, and link your bank account to start investing."
    },
    {
      question: "Is my money and personal data safe?",
      answer: "Yes, security is our top priority. We use bank-level encryption to protect your personal data and partner with regulated financial institutions to ensure your funds are secure."
    },
    {
      question: "What markets can I invest in?",
      answer: "Equidux provides access to a wide range of markets including US and international stocks, ETFs, fractional real estate, and select cryptocurrencies."
    },
    {
      question: "What is Q-Data?",
      answer: "Q-Data is our proprietary AI-driven analytics engine that analyzes market trends and provides personalized investment insights to help you make informed decisions."
    },
    {
      question: "Can I access my funds at any time?",
      answer: "Yes, you can withdraw your available funds at any time. Standard withdrawals typically take 1-3 business days to reflect in your linked bank account."
    },
    {
      question: "Are there any hidden fees or charges?",
      answer: "No, we believe in complete transparency. We offer commission-free trading on most assets. Any applicable fees are clearly displayed before you confirm a transaction."
    },
    {
      question: "What if I need help or have more questions?",
      answer: "Our dedicated support team is available 24/7. You can reach out to us via in-app chat, email, or browse our comprehensive help center for more information."
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Column */}
          <div className="w-full max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Frequently Asked<br />Questions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-secondary max-w-md mx-auto leading-[24px]">
                Find answers to common questions about Equidux, our products,
                and how to get started on your investment journey.
              </p>
            </FadeIn>
          </div>

          {/* Bottom Column - Accordion */}
          <div className="w-full">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={0.1 + (index * 0.05)}>
                  <div 
                    className="bg-surface-gray rounded-[1rem] overflow-hidden transition-all duration-200"
                  >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-[1.125rem] leading-[24px] font-bold text-gray-900 tracking-[-0.02em] pr-8">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-900">
                      {openIndex === index ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-text-secondary text-[1rem] font-medium tracking-[-0.02em] leading-[24px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
