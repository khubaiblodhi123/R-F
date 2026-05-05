import { Shield, Shirt } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const DressCode = () => {
  return (
    <section className="py-20 px-6">
      <AnimatedSection className="max-w-lg mx-auto text-center mb-10">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          What To Wear
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">
          Dress Code
        </h2>
      </AnimatedSection>

      <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatedSection delay={0.1}>
          <div className="border border-accent/30 rounded-lg p-8 text-center bg-background hover:shadow-md transition-shadow">
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Military</h3>
            <p className="font-body text-sm text-muted-foreground">
              Formal dress uniform
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="border border-accent/30 rounded-lg p-8 text-center bg-background hover:shadow-md transition-shadow">
            <Shirt className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Civilians</h3>
            <p className="font-body text-sm text-muted-foreground">
              Formal suit & gown
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DressCode;
