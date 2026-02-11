import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/config";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        description: "Please fill in all fields.",
      });
      return;
    }

    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:${siteConfig.inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      description: "Opening your email client...",
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter uppercase italic bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent underline decoration-primary/20 underline-offset-8">
            Start a <br /> Project.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's build something extraordinary together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-10 rounded-[3rem] border border-white/5">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Identity</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-16 bg-white/5 border-white/10 rounded-2xl px-6 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="h-16 bg-white/5 border-white/10 rounded-2xl px-6 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Inquiry</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your vision..."
                className="min-h-[180px] bg-white/5 border-white/10 rounded-3xl px-6 py-6 focus-visible:ring-primary focus-visible:border-primary transition-all resize-none text-lg"
              />
            </div>
            <div className="text-center pt-4">
              <Button type="submit" size="lg" className="rounded-2xl px-16 py-8 text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-300 w-full md:w-auto">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
