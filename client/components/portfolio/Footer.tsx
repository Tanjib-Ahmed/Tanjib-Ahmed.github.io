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
          <div className="text-2xl font-display font-black tracking-tighter">
            <span className="text-primary">TANJIB</span> <span className="text-foreground">AHMED.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-[0.2em]">
            {siteConfig.socialLinks.filter(link => !link.excludeFromFooter).map((link, i) => (
              <a
                key={i}
                href={link.label === "Email" ? `mailto:${link.href}` : link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                onClick={(e) => handleSocialClick(e, link)}
                className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6 border-t border-border/20 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 text-center">
          <div>© 2026 TANJIB AHMED. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
