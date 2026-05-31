import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import ExpandableCards from "@/components/ExpandableCards";
import ReportCards from "@/components/ReportCards";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <ExpandableCards />
      <ReportCards />
      <Carousel />
      <AboutSection />
      <CTA />
    </>
  );
}
