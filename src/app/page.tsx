import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesVertical from "@/components/FeaturesVertical";
import FeaturesHorizontal from "@/components/FeaturesHorizontal";
import QData from "@/components/QData";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <FeaturesVertical />
      <FeaturesHorizontal />
      <QData />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
