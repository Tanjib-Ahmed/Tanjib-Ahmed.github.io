import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { FAQ } from "@/components/portfolio/FAQ";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { useState } from "react";

export default function Index() {
  const [isHeaderFinished, setIsHeaderFinished] = useState(false);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar isHeaderFinished={isHeaderFinished} />
      <div className="transition-all duration-300 overflow-x-hidden">
        <main>
          <Hero isHeaderFinished={isHeaderFinished} setIsHeaderFinished={setIsHeaderFinished} />
          <Projects />
          <Services />
          <Testimonials />
          <Experience />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
