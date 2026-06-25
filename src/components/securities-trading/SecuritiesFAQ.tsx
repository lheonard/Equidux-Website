"use client";

import { useState } from "react";

import FadeIn from "../FadeIn";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Simply download the Equidux app, create an account, verify your identity, and link your bank account to start trading securities.",
  },
  {
    question: "What are the fees for buying and selling shares?",
    answer:
      "We offer competitive and transparent pricing. Fees vary slightly depending on the market (NGX vs US Stocks), but all charges are clearly displayed before you confirm any trade.",
  },
  {
    question: "What is the minimum amount I can invest?",
    answer:
      "You can start investing with as little as ₦1,000 for local stocks or the equivalent in USD for fractional shares of global companies.",
  },
  {
    question: "Can I withdraw my money at any time?",
    answer:
      "Yes, you can withdraw your available cash balance at any time. Funds from recently sold shares may take 1-3 business days to settle before they can be withdrawn.",
  },
  {
    question: "Are my funds safe with Equidux?",
    answer:
      "Security is our top priority. We are fully licensed and regulated by the SEC, and we use bank-level encryption to protect your personal data and investments.",
  },
  {
    question: "Can I buy fractional shares?",
    answer:
      "Yes! You don't need to buy a whole share of expensive US stocks. You can buy fractional shares, meaning you can invest exactly the dollar amount you want.",
  },
  {
    question: "Are there any hidden fees or charges?",
    answer:
      "No. We believe in complete transparency. There are no hidden maintenance fees or inactivity charges on your trading account.",
  },
];

export default function SecuritiesFAQ() {
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
                and managing your portfolio.
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
