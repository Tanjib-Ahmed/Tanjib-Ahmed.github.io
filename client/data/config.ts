import { socialLinks } from "./links";
import { testimonials } from "./testimonials";

export const siteConfig = {
    logoText: "TANJIB AHMED.",
    logoImage: "/assets/logo.png", // Add your logo image at client/assets/logo.png
    heroTitle: "I Design Graphics That Stand Out.",
    heroSubtitle: "I am a graphic designer with four years of experience. I make digital and print designs that help your brand look its best.",
    resumeUrl: "https://drive.google.com/file/d/1oxK6vYlwm2wFUK81BwHBEyOkn05bRGAm/view?usp=sharing", // Add your resume link here
    inquiryEmail: "tanjib.tanjib204@gmail.com",
    socialLinks,
    testimonials,
    faqs: [
        {
            question: "How long does a project take?",
            answer: "Small projects usually take 1 to 2 days. Big or custom designs might take a few weeks. It depends on what you need."
        },
        {
            question: "Can I ask for a custom design?",
            answer: "Yes! Just share your ideas and vision with me. I will make a custom design just for you."
        },
        {
            question: "Do you offer changes?",
            answer: "Yes, I offer changes so the final design is what you want. Small tweaks are free. If we need to change everything, there might be an extra fee."
        },
        {
            question: "How do I pay?",
            answer: "You pay 50% before we start the project. You pay the other 50% when the work is done. Then I send the final files right away. I accept PayPal and direct bank transfers."
        }
    ]
};

