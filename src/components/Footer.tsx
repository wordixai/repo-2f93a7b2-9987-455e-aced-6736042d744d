import { Twitter, MessageCircle, Youtube, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-background py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Left Side - Logo and Social */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold text-white">Qoder</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Downloads</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h4 className="text-white font-semibold mb-4">Terms</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                    Contact
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Forum</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© 2025 Qoder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;