export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  category: "Logo" | "Thumbnail" | "Social";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface SiteConfig {
  logoText: string;
  logoImage?: string;
  heroTitle: string;
  heroSubtitle: string;
  resumeUrl: string;
  inquiryEmail: string;
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
}

export interface ConfigResponse {
  config: SiteConfig;
}

export interface UpdateConfigResponse {
  success: boolean;
  message: string;
}
