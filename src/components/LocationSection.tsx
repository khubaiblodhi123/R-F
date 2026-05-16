import { MapPin, Clock, Navigation } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import BotanicalCorner from "./BotanicalCorner";

const LocationSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <BotanicalCorner className="absolute top-4 right-4 w-20 text-primary -scale-x-100 opacity-50" />
      <BotanicalCorner className="absolute bottom-4 left-4 w-20 text-primary rotate-180 -scale-x-100 opacity-50" />

      <AnimatedSection className="max-w-lg mx-auto text-center">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Where We Celebrate
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">
          The Imperial Marquees
        </h2>
        <p className="font-script text-2xl sm:text-3xl text-accent mt-1">
          Hall B
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3 text-foreground/80">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-body text-base">Karachi, Pakistan</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-foreground/80">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-body text-base">Ceremony at 09:00 pm.</span>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-48 sm:h-64 rounded-lg border border-border bg-secondary/50 overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.914249080903!2d67.10644987436618!3d24.90090644363988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339728ef3b4e1%3A0xc338a9589ff6dbc3!2sThe%20Imperial%20Marquees!5e0!3m2!1sen!2s!4v1778013607943!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        <a
          href="https://maps.app.goo.gl/Jk2bLusq4UcgcZH17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
        >
          <Navigation className="w-4 h-4" />
          Open in Maps
        </a>
      </AnimatedSection>
    </section>
  );
};

export default LocationSection;
