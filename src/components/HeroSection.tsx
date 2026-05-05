import heroVenue from "@/assets/hero-venue.jpg";
import BotanicalCorner from "./BotanicalCorner";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroVenue})` }}
      >
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Botanical corners */}
      <BotanicalCorner className="absolute top-4 left-4 w-20 sm:w-28 text-primary rotate-0" />
      <BotanicalCorner className="absolute top-4 right-4 w-20 sm:w-28 text-primary -scale-x-100" />
      <BotanicalCorner className="absolute bottom-4 left-4 w-20 sm:w-28 text-primary rotate-180 -scale-x-100" />
      <BotanicalCorner className="absolute bottom-4 right-4 w-20 sm:w-28 text-primary rotate-180" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <p className="font-display text-sm sm:text-base tracking-[0.4em] uppercase text-muted-foreground mb-6">
          We Are Getting Married
        </p>

        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-foreground mb-4">
          Rubab & Faisal
        </h1>

        <div className="flex items-center justify-center gap-4 my-8">
          <span className="h-px w-12 bg-accent" />
          <span className="font-display text-accent text-sm tracking-[0.3em]">✦</span>
          <span className="h-px w-12 bg-accent" />
        </div>

        <p className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/80">
          August 22, 2026
        </p>
        <p className="font-body text-base text-muted-foreground mt-2">
          Karachi · Pakistan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
