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
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center ${isScrolled ? 'py-8 px-6' : 'py-0 px-0 bg-transparent backdrop-blur-none'} ${!isHeaderFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={isHeaderFinished ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`transition-all duration-500 flex items-center ${isScrolled
            ? 'bg-[#121212]/80 backdrop-blur-2xl shadow-2xl w-full max-w-4xl rounded-[2rem] border border-white/10 h-16 px-8 gap-8'
            : 'w-full max-w-7xl rounded-none border-none h-24 px-10 gap-10'
            }`}
        >
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center gap-4 group shrink-0">
              <div className={`rounded-[1.25rem] overflow-hidden border-2 border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <img src={profilePhoto} alt="Tanjib" className="w-full h-full object-cover" />
              </div>
              <span className={`text-white font-display font-black tracking-tighter uppercase whitespace-nowrap transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                TANJIB <span className="text-primary">AHMED.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 font-bold text-white/50 hover:text-white transition-all duration-500 ${isScrolled ? 'text-[12px]' : 'text-[14px]'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex-1 flex justify-end">
            <a
              href="#contact"
              className={`hidden lg:flex items-center gap-3 rounded-[1.5rem] font-black bg-primary text-white hover:bg-primary/90 transition-all duration-500 shadow-[0_0_25px_rgba(var(--primary),0.3)] ${isScrolled ? 'px-6 py-2.5 text-[12px]' : 'px-8 py-3.5 text-[14px]'}`}
            >
              Get in touch
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden fixed inset-0 z-[110] bg-[#0A0A0A]/90 flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-3 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
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
                  className="text-4xl font-display font-black text-white hover:text-primary transition-colors"
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
                className="mt-4 px-10 py-5 rounded-full text-xl font-black bg-primary text-white"
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
