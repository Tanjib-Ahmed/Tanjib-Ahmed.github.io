import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const aboutImages = import.meta.glob('@/assets/about/*', { eager: true, query: '?url', import: 'default' });
const aboutImage = Object.values(aboutImages)[0] || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200";

export const Experience = () => {
    const { toast } = useToast();

    // Social Click Logic
    const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof siteConfig.socialLinks[0]) => {
        if (link.label === "Email") {
            e.preventDefault();
            const copyToClipboard = async (text: string) => {
                try {
                    await navigator.clipboard.writeText(text);
                    toast({ description: "Email copied to clipboard!", duration: 3000 });
                } catch (err) {
                    try {
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        textArea.style.position = "fixed";
                        textArea.style.left = "-9999px";
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        toast({ description: "Email copied to clipboard!", duration: 3000 });
                    } catch (fallbackErr) {
                        toast({ variant: "destructive", description: "Failed to copy email.", duration: 3000 });
                    }
                }
            };
            copyToClipboard(link.href);
        }
    };

    return (
        <section id="about" className="py-24 md:py-32 px-6 relative bg-background overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container mx-auto max-w-6xl">

                {/* --- HEADER TITLE --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col items-center text-center gap-6"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-display font-black tracking-tight text-white leading-tight">
                            Designed with<br />
                            <span className="text-primary italic">Purpose.</span>
                        </h2>
                        <p className="text-muted-foreground max-w-sm mx-auto text-lg md:mb-2">
                            My journey of learning how to build and design.
                        </p>
                    </div>
                </motion.div>

                <Tabs defaultValue="about" className="w-full">

                    {/* --- TABS NAVIGATION --- */}
                    <div className="flex justify-start md:justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar">
                        <TabsList className="bg-[#1A1A1A] border border-white/10 p-1.5 rounded-full h-auto inline-flex shadow-xl">
                            <TabTrigger value="about" icon={<User className="w-4 h-4" />}>About Me</TabTrigger>
                            <TabTrigger value="employment" icon={<Briefcase className="w-4 h-4" />}>Employment</TabTrigger>
                            <TabTrigger value="education" icon={<GraduationCap className="w-4 h-4" />}>Education</TabTrigger>
                        </TabsList>
                    </div>

                    {/* --- TAB: ABOUT ME --- */}
                    <TabsContent value="about" className="outline-none focus:outline-none mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#1A1A1A] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">

                            {/* Subtle background glow */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                            {/* Image - Spans 5 columns */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="md:col-span-5 relative"
                            >
                                <div className="aspect-[4/5] bg-background rounded-3xl overflow-hidden border border-white/10 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                                    <img
                                        src={aboutImage as string}
                                        alt="Portrait"
                                        className="object-cover w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="flex items-center text-primary font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Dhaka, Bangladesh
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bio - Spans 7 columns */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="md:col-span-7 space-y-8 relative z-10"
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-white leading-tight">
                                    Making Cool Ideas <span className="text-transparent text-stroke group-hover:text-primary transition-colors duration-500">Real.</span>
                                </h3>
                                <p className="text-lg text-white/60 leading-relaxed font-light">
                                    I am Tanjib Ahmed. I have been a graphic designer for four years. I make designs that help your brand look great and stand out.
                                </p>
                                <p className="text-lg text-white/60 leading-relaxed font-light">
                                    I study Computer Science. This helps me mix exact math with fun art. My work looks good and tells a clear story.
                                </p>

                                <div className="pt-6 flex flex-wrap items-center gap-4">
                                    <Button asChild size="lg" className="rounded-full px-8 py-6 bg-white text-black hover:bg-white/90 transition-all text-base font-bold shadow-lg shadow-white/10 cursor-pointer">
                                        <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                                            <Download className="mr-2 w-5 h-5" />
                                            Download Resume
                                        </a>
                                    </Button>

                                    <div className="flex gap-2">
                                        {siteConfig.socialLinks.filter(link => !link.footerOnly).map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.label === "Email" ? `mailto:${link.href}` : link.href}
                                                target={link.label === "Email" ? undefined : "_blank"}
                                                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                                                onClick={(e) => handleSocialClick(e, link)}
                                                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                            >
                                                <link.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </TabsContent>

                    {/* --- TAB: EMPLOYMENT --- */}
                    <TabsContent value="employment" className="outline-none focus:outline-none mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Graphic Designer",
                                    subtitle: "Game Over Zone",
                                    period: "Jan 2026 – Present",
                                    location: "Dhaka",
                                    description: ["I make cool posts and branding for gaming media."]
                                },
                                {
                                    title: "Graphic Designer (Volunteer)",
                                    subtitle: "Alokito Poribesh Foundation",
                                    period: "May 2024 – Present",
                                    location: "Dhaka",
                                    description: ["I design stories and graphics to help a charity grow."]
                                },
                                {
                                    title: "Graphic Designer",
                                    subtitle: "A Trip Z",
                                    period: "Mar 2024 – Apr 2025",
                                    location: "Dhaka",
                                    description: ["I made lots of social media posts and ads."]
                                },
                                {
                                    title: "Graphic Designer",
                                    subtitle: "Hidayah Shop",
                                    period: "Mar 2022 – Jan 2023",
                                    location: "Lakshmipur",
                                    description: ["I helped the shop get more views with my designs."]
                                },
                                {
                                    title: "Thumbnail Designer",
                                    subtitle: "COCOEED",
                                    period: "Nov 2021 – May 2022",
                                    location: "Dhaka",
                                    description: ["I made video thumbnails that fit the brand well."]
                                }
                            ].map((item, index) => (
                                <ExperienceItem key={index} {...item} index={index} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* --- TAB: EDUCATION --- */}
                    <TabsContent value="education" className="outline-none focus:outline-none mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "BSc in Computer Science & Engineering",
                                    subtitle: "Southeast University",
                                    period: "Jul 2023 – Present",
                                    location: "Dhaka"
                                },
                                {
                                    title: "Higher Secondary School Certificate",
                                    subtitle: "Dr. Mahbubur Rahman Mollah College",
                                    period: "Apr 2019 – Aug 2021",
                                    location: "Dhaka"
                                },
                                {
                                    title: "Secondary School Certificate",
                                    subtitle: "Shamsul Hoque Khan School & College",
                                    period: "Jan 2017 – Mar 2019",
                                    location: "Dhaka"
                                },
                                {
                                    title: "Junior School Certificate",
                                    subtitle: "Shamsul Hoque Khan School & College",
                                    period: "Jan 2016 – Dec 2016",
                                    location: "Dhaka"
                                }
                            ].map((item, index) => (
                                <ExperienceItem key={index} {...item} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

const TabTrigger = ({ value, children, icon }: { value: string, children: React.ReactNode, icon: React.ReactNode }) => (
    <TabsTrigger
        value={value}
        className="rounded-full px-6 py-3 text-sm flex items-center gap-2 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white font-medium text-white/50 hover:text-white"
    >
        {icon}
        {children}
    </TabsTrigger>
);

interface TimelineItemProps {
    title: string;
    subtitle: string;
    period: string;
    location: string;
    description?: string[];
    index: number;
}

const ExperienceItem = ({ title, subtitle, period, location, description, index }: TimelineItemProps) => {
    const isActive = period.toLowerCase().includes("present");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`p-8 rounded-[30px] border transition-all duration-500 overflow-hidden relative group hover:-translate-y-1 ${isActive ? "bg-[#1A1A1A] border-primary/30 shadow-[0_0_30px_rgba(124,58,237,0.05)]" : "bg-[#1A1A1A] border-white/5 hover:border-white/10"}`}
        >
            {isActive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />
            )}

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className={`text-xl md:text-2xl font-display font-bold ${isActive ? "text-white" : "text-white group-hover:text-primary transition-colors"}`}>
                        {subtitle}
                    </h3>
                    <span className={`text-[10px] md:text-xs font-mono px-3 py-1.5 rounded-full uppercase tracking-widest shrink-0 ${isActive ? "bg-primary text-white" : "bg-white/5 text-white/50 border border-white/5"}`}>
                        {period}
                    </span>
                </div>

                <div className="mb-6 flex-grow">
                    <h4 className="text-lg text-white/80 font-medium mb-1">{title}</h4>
                    <div className="flex items-center gap-1.5 text-sm text-primary/80 mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {location}
                    </div>
                </div>

                {description && (
                    <div className="pt-4 border-t border-white/10">
                        {description.map((line, i) => (
                            <p key={i} className="text-sm text-white/50 leading-relaxed font-light">
                                {line}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
