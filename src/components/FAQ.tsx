import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer: "Simply download Qoder from our website and follow the setup instructions. Our onboarding process will guide you through connecting your first repository and getting familiar with the interface."
    },
    {
      question: "What programming languages does Qoder support?",
      answer: "Qoder supports all major programming languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. Our AI agents are trained on diverse codebases to provide excellent support across different tech stacks."
    },
    {
      question: "Which AI models power Qoder?",
      answer: "Qoder uses a combination of the latest AI models including GPT-4, Claude, and other cutting-edge models. We automatically select the best model for each task to ensure optimal performance."
    },
    {
      question: "How much does it cost?",
      answer: "Qoder is currently free during our preview period. We'll announce pricing plans as we approach general availability, with options for individuals, teams, and enterprises."
    },
    {
      question: "Need help or have feedback?",
      answer: "Join our community forum, Discord server, or reach out to our support team. We're always happy to help and eager to hear your feedback to make Qoder better."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQs</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="qoder-glass rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-white hover:text-green-400 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;