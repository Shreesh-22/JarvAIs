import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-island-expand">
      <div
        className={`flex items-center justify-between px-6 py-3 dynamic-island transition-all duration-500 hover:scale-105 ${
          isScrolled
            ? "min-w-[280px] max-w-[90vw] bg-black/80 backdrop-blur-xl border border-white/10 dynamic-island-shadow"
            : "min-w-[240px] max-w-[90vw] bg-black/60 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/image.png"
            alt="JarvAI"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 w-auto" : "h-16 w-auto"
            }`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-xl border border-white/10 dynamic-island-mobile lg:hidden animate-slide-up">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#features"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#faq"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
