import { Code, Zap, Brain, Search, Image, FileText } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Always the Best Model",
      description: "Optimal model. More productivity. Fewer decisions.",
      image: true
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tab It, Get It",
      description: "Context-aware completions and smart next-edit suggestions.",
      image: true
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Comprehensive Context",
      description: "Images, code, directories, and more.",
      image: true
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '"Wikilize" Your Codebase',
      description: "Uncovers architecture and design.",
      image: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Memory and Rules",
      description: "Learns from you and works in your way.",
      image: true
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Inline Chat",
      description: "Chat or refactor code inline, without context switching.",
      image: true
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "MCP",
      description: "Extend capabilities with powerful tools from the MCP ecosystem.",
      image: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock More AI Coding Capabilities for <span className="qoder-gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground">Full of power. Free from noise.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First row - 2 cards */}
          <div className="md:col-span-2 lg:col-span-2 grid md:grid-cols-2 gap-6">
            {capabilities.slice(0, 2).map((capability, index) => (
              <div key={index} className="qoder-glass rounded-xl p-6 qoder-card-hover">
                <div className="flex flex-col h-full">
                  <div className="text-green-400 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {capability.description}
                  </p>
                  <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Feature Preview</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-3 gap-6">
            {capabilities.slice(2, 5).map((capability, index) => (
              <div key={index} className="qoder-glass rounded-xl p-6 qoder-card-hover">
                <div className="flex flex-col h-full">
                  <div className="text-green-400 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {capability.description}
                  </p>
                  <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Feature Preview</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row - 2 cards */}
          <div className="md:col-span-2 lg:col-span-2 grid md:grid-cols-2 gap-6">
            {capabilities.slice(5, 7).map((capability, index) => (
              <div key={index} className="qoder-glass rounded-xl p-6 qoder-card-hover">
                <div className="flex flex-col h-full">
                  <div className="text-green-400 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {capability.description}
                  </p>
                  <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Feature Preview</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;