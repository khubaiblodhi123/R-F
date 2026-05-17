import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { PhoneCall, User2 } from "lucide-react";

const hosts = [
  { name: "M.Ishtiaq Lodhi", phone: "+923343996855" },
  { name: "M.Khubaib Lodhi", phone: "+923308972826" },
  { name: "M.Shoaib Lodhi", phone: "+923342303426" },
  // { name: "M.Shahid Lodhi", phone: "+923333965894" },
  // { name: "M.Abid Lodhi", phone: "+923332373386" },
  // { phone: "+923112993737" },
  // { name: "M.Yousuf Lodhi", phone: "+923112993737" },
  // { name: "M.Khubaib Lodhi", phone: "+923308972826" },
  // { name: "M.Shoaib Lodhi", phone: "+923342303426" },
];

// import { Bus, PawPrint, Baby } from "lucide-react";

// const faqs = [
//   {
//     id: "bus",
//     icon: Bus,
//     question: "Bus Service",
//     answer:
//       "A complimentary shuttle service will run between Palma city center and the venue. Departure at 15:00, return trips available from 01:00 onwards.",
//   },
//   {
//     id: "pets",
//     icon: PawPrint,
//     question: "Pets",
//     answer:
//       "We love your furry friends, but unfortunately pets are not permitted at the venue. Please arrange care for them in advance.",
//   },
//   {
//     id: "children",
//     icon: Baby,
//     question: "Children",
//     answer:
//       "This will be an adults-only celebration. We hope you understand and enjoy a night off!",
//   },
// ];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 ">
      <AnimatedSection className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Honoured to Host You
          </p>
          <h4 className="font-display text-3xl sm:text-4xl text-foreground mb-7">
            Awaiting to Welcome
          </h4>
          <p className="font-display text-2xl sm:text-1.5xl text-foreground">
            All Family Members
          </p>
          <div className="mt-5 flex flex-col items-center gap-3">
            {hosts.map((host) => (
              <div
                // key={host.name}
                className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-background/80 px-4 py-3 shadow-sm w-fit"
              >
                {/* <div className="flex items-center gap-2">
                  <User2 className="w-4 h-4 text-accent" />
                  <span className="font-body text-sm text-foreground">
                    {/* {host.name} */}
                  {/* </span>
                </div> */} 
                <a
                  href={`tel:${host.phone}`}
                  className="flex items-center gap-2 text-sm font-mono text-accent hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{host.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {/* {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-accent/20 rounded-lg px-4 bg-background"
            >
              <AccordionTrigger className="font-display text-base hover:no-underline gap-3">
                <span className="flex items-center gap-3">
                  <faq.icon className="w-4 h-4 text-accent" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))} */}
        </Accordion>
      </AnimatedSection>
    </section>
  );
};

export default FAQSection;
