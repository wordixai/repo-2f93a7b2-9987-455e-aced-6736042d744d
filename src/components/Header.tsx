import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-white">Qoder</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-white transition-colors">
            Blog
          </a>
          <a href="#docs" className="text-muted-foreground hover:text-white transition-colors">
            Docs
          </a>
          <a href="#forum" className="text-muted-foreground hover:text-white transition-colors">
            Forum
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex rounded-full">
            Sign in
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
            Download
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;