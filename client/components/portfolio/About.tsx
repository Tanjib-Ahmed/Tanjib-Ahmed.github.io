import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useToast } from "@/components/ui/use-toast";

// Dynamic asset loading for About image
const aboutImages = import.meta.glob('@/assets/about/*', { eager: true, as: 'url' });
const aboutImage = Object.values(aboutImages)[0] || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200";

export const About = () => {
  const { toast } = useToast();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof siteConfig.socialLinks[0]) => {
    if (link.label === "Email") {
      e.preventDefault();

      const copyToClipboard = async (text: string) => {
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
          } else {
            // Fallback for non-secure contexts (http://192.168.x.x)
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }
          toast({
            description: "Email copied to clipboard!",
            duration: 3000,
          });
        } catch (err) {
          console.error('Failed to copy', err);
          toast({
            variant: "destructive",
            description: "Failed to copy email.",
            duration: 3000,
          });
        }
      };

      copyToClipboard(link.href);
    }
  };

  return (
    <section id="about" className="py-24 px-6 bg-background relative border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-white/5 shadow-xl p-4 hover:border-primary/50 transition-all duration-700 relative group">
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <img
                  src={aboutImage}
                  alt="Portrait"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8">Meet <br /> <span className="font-script text-primary">the Creative</span></h2>
            <p className="text-lg text-white/60 mb-6 leading-relaxed font-sans">
              I'm Tanjib Ahmed, a dynamic and innovative Graphic Designer with over two years of experience in creating impactful visual solutions across digital and print platforms. Skilled in social media design, branding, and Adobe Creative Suite, delivering high-quality graphics under tight deadlines.
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-sans">
              With a strong foundation in computer science, I integrate technology with creativity to produce compelling visuals that enhance brand identity and engagement.
            </p>

            <div className="flex gap-4 mb-12">
              {siteConfig.socialLinks.filter(link => !link.footerOnly).map((link, i) => (
                <a
                  key={i}
                  href={link.label === "Email" ? `mailto:${link.href}` : link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  onClick={(e) => handleSocialClick(e, link)}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-8 py-6 font-bold bg-primary text-white hover:bg-primary/90 shadow-none group transition-all duration-500 cursor-pointer">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
