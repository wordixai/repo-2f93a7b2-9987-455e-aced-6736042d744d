import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">Q</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Real Software?
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-12">
            Start Your Free Trial
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg flex items-center gap-3 mx-auto"
          >
            <Download className="w-6 h-6" />
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;