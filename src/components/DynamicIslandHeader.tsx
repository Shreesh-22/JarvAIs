import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const DynamicIslandHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Product", href: "#features" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Desktop Dynamic Island */}
      <header
        className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div
          className={`transition-all duration-500 rounded-full backdrop-blur-xl border border-border/50 ${
            isExpanded || scrolled
              ? "bg-card/80 shadow-xl px-6 py-3"
              : "bg-card/60 px-4 py-2"
          }`}
          style={{
            width: isExpanded ? "auto" : scrolled ? "180px" : "140px",
          }}
        >
          <div className="flex items-center gap-6">
            {!isExpanded && !scrolled && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">JarvAI</span>
              </div>
            )}

            {(isExpanded || scrolled) && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    All systems operational
                  </span>
                </div>

                {isExpanded && (
                  <nav className="flex items-center gap-4 animate-fade-in">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button size="sm" className="ml-2">
                      Download
                    </Button>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">JarvAI</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="border-t border-border/50 bg-card/95 backdrop-blur-xl animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-4">Download</Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default DynamicIslandHeader;
