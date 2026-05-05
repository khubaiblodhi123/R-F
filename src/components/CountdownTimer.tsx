import { useState, useEffect } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WEDDING_DATE = new Date("2026-08-22T16:00:00+02:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, WEDDING_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <AnimatedSection className="max-w-lg mx-auto text-center">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Counting Down To Our Day
        </p>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <div className="w-full aspect-square flex items-center justify-center border border-accent/40 rounded-lg bg-background shadow-sm">
                <span className="font-display text-2xl sm:text-4xl text-foreground">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 font-body text-xs sm:text-sm text-muted-foreground tracking-wider uppercase">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CountdownTimer;
