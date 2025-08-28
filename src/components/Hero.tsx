import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
          <span className="text-green-400 text-sm font-medium">
            Free Access During Preview
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Agentic Coding Platform</span>
          <br />
          <span className="text-white">for </span>
          <span className="qoder-gradient-text">Real Software</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Think Deeper. Build Better.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-700 text-white hover:bg-gray-800 rounded-full px-8 py-3"
          >
            All Downloads
          </Button>
        </div>

        {/* Demo Video/Image Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden qoder-glow">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Interactive Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;