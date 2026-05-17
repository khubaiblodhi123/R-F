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
        {/* <div className="text-4xl sm:text-5xl text-accent/100 font-serif mb-6 antialiased select-none tracking-wide">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div> */}

        <div className="text-4xl sm:text-5xl text-accent/100 font-serif -mt-10 mb-10 antialiased select-none tracking-wide">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
        {/* <p className="font-display text-sm sm:text-base tracking-[0.4em] uppercase text-muted-foreground mb-6">
          Mr. & Mrs. Ishtiaq Lodhi
        </p>
        <p>
          Request the honour of your presence at the Wedding reception of their Daughter,
        </p> */}
        <div className="flex flex-col items-center text-center max-w-md mx-auto my-6 px-4 select-none">
        {/* أسماء الوالدين بتنسيق عالي التباعد وأنيق */}
        <p className="font-display text-sm sm:text-base tracking-[0.35em] uppercase text-accent font-medium mb-3">
          Mr. & Mrs. Ishtiaq Lodhi
        </p>
        
        {/* عبارة طلب الحضور بخط سيريف مائل ومنساب */}
        <p className="font-serif italic text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-xs sm:max-w-sm">
          Request the honour of your presence at the Wedding ceremony of their beloved daughter,
        </p>
      </div>

        <h1 className="font-script text-4xl sm:text-6xl md:text-6xl text-foreground mb-1">
          Rubab Lodhi
        </h1>
        <h1 className="font-script text-4xl sm:text-7xl md:text-4xl text-foreground mb-1">
          With
        </h1>
        <h1 className="font-script text-4xl sm:text-6xl md:text-6xl text-foreground mb-1">
          Faisal Alam
        </h1>
        <p className="font-serif italic text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-xs sm:max-w-sm">S/O Muzaffar Alam (Late)</p>

        <div className="flex items-center justify-center gap9 my0">
          <span className="h-px w-12 bg-accent" />
          <span className="font-display text-accent text-sm tracking-[0.3em]">✦</span>
          <span className="h-px w-12 bg-accent" />
        </div>

        {/* <p className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/80">
          Saturday
        </p> */}
        <p className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/50">
          INSHALLAH
        </p>
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
      {/* <div className="absolute bottom-8 left-[40%] -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2">

          {/* Scroll Text */}
          {/* <span className="font-display text-[11px] sm:text-xs tracking-[0.45em] uppercase text-black/55">
            Scroll Down
          </span>

          {/* Elegant Circle */}
          {/* <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black/20 bg-black/55 backdrop-blur-sm shadow-xl">
            <ChevronDown className="w-5 h-5 text-white/90" />
          </div>

        </div>
      </div> */}
      {/* Scroll Indicator */}
      {/* Scroll Indicator
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer group">

          {/* Scroll Text */}
          {/* <span className="font-display text-[11px] sm:text-xs tracking-[0.45em] uppercase text-black/55 transition-all duration-300 group-hover:text-black">
            Scroll Down
          </span>

          {/* Elegant Circle */}
          {/* <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black/20 bg-black/55 backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black/75">
            <ChevronDown className="w-5 h-5 text-white/90" />
          </div>

        </div>
      </button> */} 
      {/* Scroll Indicator */}
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="absolute bottom-6 inset-x-0 mx-auto w-fit z-30 animate-bounce"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer group">

          {/* Scroll Text */}
          <span className="font-display text-[11px] sm:text-xs tracking-[0.45em] uppercase text-black/55 transition-all duration-300 group-hover:text-black text-center">
            Scroll Down
          </span>

          {/* Elegant Circle */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black/20 bg-black/55 backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black/75">
            <ChevronDown className="w-5 h-5 text-white/90" />
          </div>

        </div>
      </button>

    </section>
  );
};

export default HeroSection;
