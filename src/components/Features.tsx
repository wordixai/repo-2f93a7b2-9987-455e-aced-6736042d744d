import { Code, Zap, Brain, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Through Conversation",
      description: "Powered by an enhanced context engine, our agents learn from the codebase and relevant documentation to autonomously plan and edit your entire project based on simple prompts.",
      video: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quest Mode: Delegate Tasks to Agents",
      description: "Describe your task with specifications. Our agents will complete the planning, coding, and testing, and deliver polished results asynchronously.",
      video: true
    }
  ];

  const capabilities = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Codebase Search",
      description: "Instantly pinpoint relevant code across your entire codebase."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Repository Insight",
      description: "Resolve issues with precision based on deep architectural understanding of your codebase."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Memory for Continuous Improvement",
      description: "Adapts to you, learning from every interaction in your chat to be smarter."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tool Use",
      description: "Perceive additional context and execute various actions with built-in and MCP tools."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Main Features */}
        <div className="space-y-32 mb-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">Demo Video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Qoder Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Why Qoder</span>
              <span className="text-muted-foreground ml-2">/ˈkoʊdər/</span>
            </div>
          </div>
          
          <div className="text-4xl md:text-6xl font-bold mb-4">
            <div className="text-white mb-2">Not just another AI IDE.</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-white">Qoder thinks</span>
              <span className="qoder-gradient-text">{ deeper }</span>
              <span className="text-white">to solve</span>
            </div>
            <div className="text-white mt-2">real software challenges.</div>
          </div>
        </div>

        {/* What Makes Our Agents Excellent */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Makes Our Agents <span className="qoder-gradient-text">Excellent</span>
          </h2>
          <p className="text-xl text-muted-foreground">Full context. Deeper insight. Build your way.</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="qoder-glass rounded-xl p-6 qoder-card-hover">
              <div className="text-green-400 mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;