import { siteConfig } from "@/data/config";
import { useToast } from "@/components/ui/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof siteConfig.socialLinks[0]) => {
    if (link.label === "Email") {
      e.preventDefault();
      navigator.clipboard.writeText(link.href);
      toast({
        description: "Email copied to clipboard!",
        duration: 3000,
      });
    }
  };

  return (
    <footer className="py-10 border-t border-white/5 px-6 bg-background relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="text-xl font-display font-bold text-white">
            Tanjib <span className="font-script text-primary">Ahmed</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-sans text-white/50">
            {siteConfig.socialLinks.filter(link => !link.excludeFromFooter).map((link, i) => (
              <a
                key={i}
                href={link.label === "Email" ? `mailto:${link.href}` : link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                onClick={(e) => handleSocialClick(e, link)}
                className="hover:text-primary transition-all duration-300 flex items-center gap-2 cursor-pointer"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6 border-t border-white/5 text-xs font-sans text-white/30 text-center">
          <div>© 2026 Tanjib Ahmed. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
