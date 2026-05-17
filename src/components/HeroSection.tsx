import heroVenue from "@/assets/hero-venue.jpg";
import BotanicalCorner from "./BotanicalCorner";
import { ChevronDown } from "lucide-react";

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
      {/* Elegant Bismillah Heading */}
      {/* <div className="text-2xl sm:text-3xl text-accent/90 font-serif mb-6 antialiased select-none">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div> */}
      <div className="relative z-10 text-center px-6 py-20">
        {/* Elegant Bismillah Heading */}
        {/* <div className="text-3xl sm:text-4xl text-accent/100 font-serif mb-7 antialiased select-none">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div> */}
        {/* <div className="text-3xl sm:text-4xl text-accent/100 font-serif mb-8 antialiased select-none">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div> */}
        {/* البسملة في المكان المحدد بالدائرة السوداء */}
        <div className="text-4xl sm:text-5xl text-accent/100 font-serif mb-6 antialiased select-none tracking-wide">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
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

        {/* <p className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/80">
          Saturday
        </p> */}
        <p className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/80">
          Saturday · August 22, 2026
        </p>
        <p className="font-body text-base text-muted-foreground mt-2">
          Karachi · Pakistan
        </p>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
          <span className="text-[15px] sm:text-xs tracking-[0.3em] uppercase text-foreground/70 font-display">
            Scroll
          </span>

          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 bg-background/20 backdrop-blur-sm">
            <ChevronDown className="w-5 h-5 text-accent animate-pulse" />
          </div>
        </div>
      </div> */}
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-3">

          {/* Scroll Text */}
          {/* <span className="text-sm sm:text-base tracking-[0.35em] uppercase text-white font-semibold drop-shadow-lg animate-pulse">
            Scroll Down
          </span> */}
          <span className="text-sm sm:text-base tracking-[0.35em] uppercase text-gray-700 font-semibold drop-shadow-lg animate-pulse">
            Scroll Down
          </span>

          {/* Circle Button */}
          <div className="relative flex items-center justify-center">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-black/40 blur-xl animate-pulse" />

            {/* Main Circle */}
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/30 bg-black/70 backdrop-blur-md shadow-2xl">
              <ChevronDown className="w-7 h-7 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
