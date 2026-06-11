import type { Metadata } from "next";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MutualFundsChoose from "@/components/mutual-funds/MutualFundsChoose";
import MutualFundsFAQ from "@/components/mutual-funds/MutualFundsFAQ";
import MutualFundsHero from "@/components/mutual-funds/MutualFundsHero";
import MutualFundsSmarter from "@/components/mutual-funds/MutualFundsSmarter";
import MutualFundsSteps from "@/components/mutual-funds/MutualFundsSteps";

export const metadata: Metadata = {
  title: "Mutual Funds | Equidux",
  description:
    "Grow your wealth with expertly managed mutual funds on Equidux.",
};

export default function MutualFundsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <MutualFundsHero />
      <MutualFundsSmarter />
      <MutualFundsChoose />
      <MutualFundsSteps />
      <MutualFundsFAQ />
      <CTA />
      <Footer />
    </main>
  );
}
