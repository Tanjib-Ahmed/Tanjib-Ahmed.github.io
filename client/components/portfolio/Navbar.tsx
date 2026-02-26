import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, MessageSquare, User, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";

// Dynamic logo loading
const logoImages = import.meta.glob('@/assets/logo/*', { eager: true, as: 'url' });
const dynamicLogo = Object.values(logoImages)[0] as string | undefined;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoSrc = dynamicLogo || siteConfig.logoImage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
    { label: "Portfolio", href: "#work", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Services", href: "#services", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Testimonials", href: "#testimonials", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "About Me", href: "#about", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${isScrolled ? 'top-6 w-[95%] max-w-5xl' : 'top-0 w-full max-w-7xl'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent px-8 py-8 shadow-none rounded-none'}`}>

          {/* Logo & Name */}
          <div className="text-xl font-display font-black tracking-tighter text-foreground flex items-center gap-3">
            {logoSrc ? (
              <img src={logoSrc} alt={siteConfig.logoText} className="h-8 w-8 rounded-full object-cover border border-primary/20" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs text-white">
                TA
              </div>
            )}
            <span className="hidden sm:inline-block">
              {siteConfig.logoText && siteConfig.logoText !== "TANJIB AHMED." ? (
                siteConfig.logoText
              ) : (
                <>
                  <span className="text-primary">TANJIB</span> AHMED.
                </>
              )}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-white/10 rounded-full transition-colors bg-white/5 border border-white/10 relative z-50"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden fixed inset-0 z-[90] bg-[#0D0D0D]/98 backdrop-blur-3xl flex flex-col p-10 pt-32"
          >
            <div className="flex flex-col gap-6 items-center w-full max-w-sm mx-auto">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-2xl font-display font-bold text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/10 flex items-center justify-center gap-3"
                >
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center py-4 rounded-full text-lg font-bold bg-primary text-white hover:bg-primary/80 transition-all neon-glow"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
