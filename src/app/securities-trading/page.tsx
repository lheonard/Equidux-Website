import type { Metadata } from "next";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SecuritiesFAQ from "@/components/securities-trading/SecuritiesFAQ";
import SecuritiesHero from "@/components/securities-trading/SecuritiesHero";
import SecuritiesMarkets from "@/components/securities-trading/SecuritiesMarkets";
import SecuritiesPlatform from "@/components/securities-trading/SecuritiesPlatform";
import SecuritiesResearch from "@/components/securities-trading/SecuritiesResearch";

export const metadata: Metadata = {
  title: "Securities Trading | Equidux",
  description:
    "Trade on the world's leading exchanges with Equidux.",
};

export default function SecuritiesTradingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <SecuritiesHero />
      <SecuritiesMarkets />
      <SecuritiesPlatform />
      <SecuritiesResearch />
      <SecuritiesFAQ />
      <CTA />
      <Footer />
    </main>
  );
}
