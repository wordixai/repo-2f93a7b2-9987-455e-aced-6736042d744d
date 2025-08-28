import { Brain, Eye, FileText } from "lucide-react";

const Concepts = () => {
  const concepts = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Enhanced Context Engineering",
      description: "Our advanced context engine combines deep codebase analysis with adaptive memory, delivering smarter AI that truly evolves with you."
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Knowledge Visibility",
      description: "Make your codebase truly understandable - for both humans and AI. Clear visibility reduces hallucinations and improves alignment."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Spec-Driven Development",
      description: "Start by writing specs to clarify requirements. Then delegate implementation - stay in control while AI automates execution. Fewer iterations. Faster delivery."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Key <span className="qoder-gradient-text">Concepts</span> Behind
          </h2>
          <p className="text-xl text-muted-foreground">Three concepts that guide everything we do.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={index} className="qoder-glass rounded-xl p-8 qoder-card-hover text-center">
              <div className="text-green-400 mb-6 flex justify-center">
                {concept.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {concept.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concepts;