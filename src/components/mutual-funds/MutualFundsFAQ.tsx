"use client";

import { useState } from "react";

import FadeIn from "../FadeIn";

const faqs = [
  {
    question: "What is a mutual fund?",
    answer:
      "A mutual fund pools money from many investors to invest in a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers.",
  },
  {
    question: "How do mutual funds work?",
    answer:
      "You invest a sum of money into a fund, receive units based on the fund's net asset value, and earn returns as the underlying assets grow in value or generate income.",
  },
  {
    question: "What is the minimum amount I can invest?",
    answer:
      "Minimum amounts vary by fund. Many of our mutual funds allow you to start from as little as ₦1,000 — check each fund's details before investing.",
  },
  {
    question: "Are my funds safe with Equidux?",
    answer:
      "Yes. Equidux partners with regulated fund managers and uses bank-level security to protect your account and personal data.",
  },
  {
    question: "Can I withdraw at any time?",
    answer:
      "Most funds allow withdrawals, though some may have specific notice periods or settlement timelines. Details are provided for each fund on the platform.",
  },
  {
    question: "How do I track my returns?",
    answer:
      "You can monitor your portfolio performance in real time through the Equidux app or web platform, with clear breakdowns of returns and holdings.",
  },
  {
    question: "How do I set up for my kids?",
    answer:
      "You can open a custodial or minor account through Equidux and assign a fund that matches your child's long-term savings goals.",
  },
];

export default function MutualFundsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[42px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="w-full max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-[2rem] leading-[40px] lg:text-[2.5rem] lg:leading-[46px] font-bold tracking-[-0.02em] text-gray-900 mb-3">
                Frequently Asked
                <br />
                Questions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[1rem] font-medium tracking-[-0.02em] text-text-secondary max-w-md mx-auto leading-[24px]">
                Everything you need to know about getting started, investing,
                and managing your funds.
              </p>
            </FadeIn>
          </div>

          <div className="w-full">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FadeIn key={faq.question} delay={0.1 + index * 0.05}>
                  <div className="bg-surface-gray rounded-[1rem] overflow-hidden transition-all duration-200">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-[1.125rem] leading-[24px] font-bold text-gray-900 tracking-[-0.02em] pr-8">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-900">
                        {openIndex === index ? (
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
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
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
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-48 pb-6 opacity-100"
                          : "max-h-0 opacity-0"
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
