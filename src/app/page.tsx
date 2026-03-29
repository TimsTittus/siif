import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ServicesHub } from "@/components/ServicesHub";
import { FounderJourney } from "@/components/FounderJourney";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <main className="flex-grow">
        <Hero />
        <Intro />
        <ServicesHub />
        <FounderJourney />
        <CTA />
      </main>
    </div>
  );
}
