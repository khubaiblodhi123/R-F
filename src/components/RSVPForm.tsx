import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Send, Check } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    attendance: "yes",
    dietary: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <BotanicalCorner className="absolute top-4 left-4 w-20 text-primary opacity-50" />
      <BotanicalCorner className="absolute bottom-4 right-4 w-20 text-primary rotate-180 opacity-50" />

      <AnimatedSection className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Will You Join Us?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Confirm Your Attendance
          </h2>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <p className="font-display text-xl text-foreground mb-2">Thank You!</p>
            <p className="font-body text-muted-foreground">
              We have received your response. We can't wait to celebrate with you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-display text-sm tracking-wider">
                Full Name
              </Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 bg-background border-accent/30 font-body"
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label className="font-display text-sm tracking-wider mb-3 block">
                Will You Attend?
              </Label>
              <RadioGroup
                value={form.attendance}
                onValueChange={(v) => setForm({ ...form, attendance: v })}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-body cursor-pointer">
                    Joyfully Accept
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-body cursor-pointer">
                    Regretfully Decline
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="dietary" className="font-display text-sm tracking-wider">
                Dietary Restrictions
              </Label>
              <Textarea
                id="dietary"
                value={form.dietary}
                onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                className="mt-2 bg-background border-accent/30 font-body"
                placeholder="Any allergies or dietary needs..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </form>
        )}
      </AnimatedSection>
    </section>
  );
};

export default RSVPForm;
