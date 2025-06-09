import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Can I use it without coding skills?",
      answer:
        "Absolutely. We support both tech and non-tech users — from marketing and business to engineering and more.",
      defaultOpen: true,
    },
    {
      question: "How accurate are the AI interviews?",
      answer:
        "Our AI interviews are highly accurate and designed to simulate real interview scenarios with intelligent feedback systems.",
    },
    {
      question: "Do I need to buy any courses?",
      answer:
        "No, you don't need to purchase courses separately. We provide curated recommendations and affiliate partnerships with top platforms.",
    },
    {
      question: "How is this different from regular e-learning platforms?",
      answer:
        "Unlike traditional platforms, we offer personalized AI-powered assessments, smart learning paths, and real-time interview practice with instant feedback.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl font-semibold leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[980px] mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20 py-11"
              >
                <AccordionTrigger className="text-left text-white text-2xl font-bold leading-normal tracking-[-0.81px] hover:no-underline [&[data-state=open]>svg]:rotate-45">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white text-2xl leading-normal pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
