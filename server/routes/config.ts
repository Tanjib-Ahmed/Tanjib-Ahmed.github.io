import { RequestHandler } from "express";
import { SiteConfig } from "../../shared/api";

// Initial state based on current website content
let siteConfig: SiteConfig = {
  logoText: "SAJID.",
  heroTitle: "Visualizing the Future of Digital Identity.",
  heroSubtitle: "Graphic designer & digital strategist based in Dhaka. I help brands stand out through deep-blue aesthetics and purposeful purple pixels.",
  resumeUrl: "#",
  inquiryEmail: "contact@sajid.site",
  projects: [
    // Logo Designs
    { id: "l1", title: "Minimal Logo", category: "Logo", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: "l2", title: "Modern Brand", category: "Logo", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: "l3", title: "Creative Symbol", category: "Logo", image: "https://images.unsplash.com/photo-1614811514919-7fd02d9d2b5d?q=80&w=400&h=400&auto=format&fit=crop" },
    // Thumbnail Designs
    { id: "t1", title: "Tech Thumbnail", category: "Thumbnail", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&h=400&auto=format&fit=crop" },
    { id: "t2", title: "Gaming Thumbnail", category: "Thumbnail", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=400&auto=format&fit=crop" },
    // Social Media Designs
    { id: "s1", title: "Insta Post", category: "Social", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=600&h=600&auto=format&fit=crop" },
    { id: "s2", title: "FB Banner", category: "Social", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=600&h=600&auto=format&fit=crop" },
  ],
  testimonials: [
    {
      id: "test1",
      quote: "Sajid's eye for detail and ability to translate our abstract ideas into a concrete brand identity was remarkable. He's a true professional.",
      author: "Elena Rodriguez",
      role: "CEO, Lux Architecture"
    },
    {
      id: "test2",
      quote: "Working with Sajid was a breeze. He delivered on time and the quality of work exceeded our expectations. Highly recommended.",
      author: "Marcus Chen",
      role: "Founder, EcoSphere"
    }
  ]
};

export const getConfig: RequestHandler = (req, res) => {
  res.json({ config: siteConfig });
};

export const updateConfig: RequestHandler = (req, res) => {
  const newConfig = req.body as SiteConfig;
  if (!newConfig) {
    return res.status(400).json({ success: false, message: "Invalid configuration" });
  }
  
  siteConfig = { ...siteConfig, ...newConfig };
  res.json({ success: true, message: "Configuration updated successfully" });
};
