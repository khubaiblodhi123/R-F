import { useState } from "react";
import Envelope from "@/components/Envelope";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import LocationSection from "@/components/LocationSection";
import Timeline from "@/components/Timeline";
import DressCode from "@/components/DressCode";
import FAQSection from "@/components/FAQSection";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <>
      {!envelopeOpen && <Envelope onOpen={() => setEnvelopeOpen(true)} />}

      <main className="bg-background">
        <HeroSection />
        <CountdownTimer />
        <LocationSection />
        <Timeline />
        {/* <DressCode /> */}
        <FAQSection />
        {/* <RSVPForm /> */}

        {/* Footer */}
        <footer className="py-12 text-center bg-secondary/50">
          <p className="font-script text-2xl text-foreground mb-2">Rubab & Faisal</p>
          <p className="font-body text-sm text-muted-foreground tracking-wider">
          Saturday · August 22, 2026 · Karachi
          </p>
        </footer>
      </main>
    </>
  );
};

export default Index;
