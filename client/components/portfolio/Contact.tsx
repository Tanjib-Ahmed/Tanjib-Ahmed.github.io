import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";


export const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "tanjib.tanjib204@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({ description: "Email copied to clipboard!", duration: 3000 });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback logic
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        toast({ description: "Email copied to clipboard!", duration: 3000 });
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        toast({ variant: "destructive", description: "Failed to copy email.", duration: 3000 });
      }
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Tanjib Ahmed
N:Ahmed;Tanjib;;;
EMAIL;TYPE=INTERNET:tanjib.tanjib204@gmail.com
TEL;TYPE=CELL:+8801815782269
URL:https://Tanjib-Ahmed.github.io
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Tanjib_Ahmed.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-secondary/5">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter uppercase italic bg-gradient-to-br from-white via-white/80 to-white/50 bg-clip-text text-transparent">
            Let's Talk.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Do you have a project in mind? Or maybe you just want to say hi. I am always happy to chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto relative">
          
          {/* Left Column (md:col-span-8) */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* Section 1: Branding, Email & Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center text-center justify-center group bg-black/40 min-h-[500px]"
            >
              <div className="relative z-10 space-y-8 w-full">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-white leading-tight">
                    Let's <span className="text-primary italic">Talk.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/50 max-w-lg mx-auto leading-relaxed font-medium">
                    Do you have a project in mind? Or maybe you just want to say hi. I am always happy to chat.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/20">Email Address</p>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight break-all">tanjib.tanjib204@gmail.com</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                    <Button
                      onClick={handleSaveContact}
                      className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white text-black hover:bg-white/90 font-black tracking-tight"
                    >
                      <Download className="mr-2 w-5 h-5" /> Save Contact
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCopyEmail}
                      className="w-full sm:w-auto h-14 px-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-black tracking-tight"
                    >
                      {copied ? <Check className="mr-2 w-5 h-5 text-green-400" /> : <Copy className="mr-2 w-5 h-5" />}
                      {copied ? "Copied!" : "Copy Email"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/tanjib-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex items-center gap-8 group bg-[#0077b5]/5 hover:bg-[#0077b5]/10 transition-all duration-500 min-h-[180px]"
            >
              <div className="relative z-10 flex items-center gap-6 w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-white italic tracking-tight uppercase">Professional Networking</h4>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Grow your network with me</p>
                </div>
                <ArrowRight className="w-8 h-8 text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>
          </div>

          {/* Right Column (md:col-span-4) - 3-Stack Social Icons */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Facebook Tile */}
            <motion.a
              href="https://www.facebook.com/ta.asif20"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative glass-card p-10 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center bg-black/60 hover:bg-[#1877F2]/10 transition-all group flex-1 min-h-[160px]"
            >
              <div className="relative z-10">
                <svg className="w-16 h-16 text-white fill-current group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </motion.a>

            {/* WhatsApp Tile */}
            <motion.a
              href="https://wa.me/+8801815782269"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative glass-card p-10 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center bg-black/60 hover:bg-[#25D366]/10 transition-all group flex-1 min-h-[160px]"
            >
              <div className="relative z-10">
                <svg className="w-16 h-16 text-white fill-current group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
              </div>
            </motion.a>

            {/* Telegram Tile */}
            <motion.a
              href="https://t.me/taasif20"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative glass-card p-10 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center bg-black/60 hover:bg-[#229ED9]/10 transition-all group flex-1 min-h-[160px]"
            >
              <div className="relative z-10 flex flex-col items-center gap-3">
                <svg className="w-20 h-20 text-white fill-current group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.24-.53.24l.202-3.03 5.51-4.97c.24-.21-.054-.33-.37-.12l-6.82 4.29-2.94-.92c-.64-.2-.65-.64.13-.94l11.5-4.43c.53-.19 1 .13.84.91z" />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};


