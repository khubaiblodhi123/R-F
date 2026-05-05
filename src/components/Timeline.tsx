import { Users , Handshake, UtensilsCrossed, Music, PartyPopper } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const events = [
  { time: "09:00", title: "Arrival", icon: Handshake },  
  { time: "09:30", title: "Gathering", icon: Users  },
  { time: "10:30", title: "Dinner", icon: UtensilsCrossed },
  { time: "12:00", title: "Rukhsati", icon: PartyPopper },
];

const Timeline = () => {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <AnimatedSection className="max-w-md mx-auto text-center mb-12">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Our Day
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">
          Day Program
        </h2>
      </AnimatedSection>

      <div className="max-w-sm mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/30" />

        {events.map((event, i) => (
          <AnimatedSection key={event.title} delay={i * 0.1} className="relative flex items-start gap-6 mb-10 last:mb-0">
            {/* Icon circle */}
            <div className="relative z-10 w-12 h-12 rounded-full border border-accent/50 bg-background flex items-center justify-center shrink-0">
              <event.icon className="w-5 h-5 text-accent" />
            </div>

            <div className="pt-2">
              {event.time && (
                <span className="font-display text-sm text-accent tracking-wider">
                  {event.time}
                </span>
              )}
              <h3 className="font-display text-lg text-foreground">
                {event.title}
              </h3>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
