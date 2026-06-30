import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/config";
import profilePhoto from "@/assets/logo/photo_2024-09-16_23-58-58 copys 2.png";

export const Navbar = ({ isHeaderFinished }: { isHeaderFinished: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About Me", href: "#about" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center ${!isHeaderFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={isHeaderFinished ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`transition-all duration-500 flex items-center w-full max-w-full px-8 md:px-16 gap-10 ${isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 h-20 shadow-lg shadow-black/10'
            : 'bg-transparent h-24 border-b border-transparent'
            }`}
        >
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center gap-4 group shrink-0">
              <div className={`rounded-full overflow-hidden border-2 border-primary/50 transition-all duration-500 ${isScrolled ? 'w-9 h-9' : 'w-11 h-11'}`}>
                <img src={profilePhoto} alt="Tanjib" className="w-full h-full object-cover" />
              </div>
              <span className={`text-white font-display font-bold whitespace-nowrap transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                Tanjib <span className="font-script text-primary">Ahmed</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-sans font-medium text-white/60 hover:text-primary transition-all duration-300 rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex-1 flex justify-end">
            <a
              href="#contact"
              className={`hidden lg:flex items-center gap-2 rounded-full bg-primary text-white hover:bg-primary/90 font-semibold text-sm transition-all duration-500 ${isScrolled ? 'px-5 py-2' : 'px-6 py-2.5'}`}
            >
              Get in touch
              <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="md:hidden fixed inset-0 z-[110] bg-background/98 flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-3 text-white/60 hover:text-primary bg-white/5 border border-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-4 rounded-full bg-primary text-white hover:bg-primary/90 text-sm font-bold transition-colors"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
