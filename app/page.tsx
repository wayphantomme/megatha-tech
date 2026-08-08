import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechMarquee from "./components/TechMarquee";
import PainPointSection from "./components/PainPointSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import ClientsSection from "./components/ClientsSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import RiskReversalSection from "./components/RiskReversalSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechMarquee />
        <PainPointSection />
        <CapabilitiesSection />
        <ShowcaseSection />
        <ClientsSection />
        <ProcessSection />
        <PricingSection />
        <RiskReversalSection />
      </main>
      <Footer />
    </>
  );
}
