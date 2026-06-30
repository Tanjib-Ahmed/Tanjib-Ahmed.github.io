import { motion } from "framer-motion";
import { Palette, Layers, Monitor, PenTool, LayoutTemplate, MessageSquare } from "lucide-react";

const skills = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Social Media Design",
    description: "I make posts for Facebook and Instagram. This helps your brand get noticed."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Print Design",
    description: "I design flyers, posters, and brochures. These are ready for you to print."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Website Graphics",
    description: "I make custom shapes and images for your website. They make your site look great."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Branding & Identity",
    description: "I design logos and brand guides. These help tell your story to the world."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "I design screens for apps and websites. I make them easy to use."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Soft Skills",
    description: "I talk well with clients and work great in teams. I also finish work on time."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative bg-background">
      <div className="container mx-auto">
        {/* Orange gradient banner */}
        <div className="orange-gradient rounded-3xl p-8 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            My <span className="font-script">Services</span>
          </h2>
          <p className="text-white/70 font-sans text-base md:text-lg mt-3 max-w-xl">
            I solve problems and make cool things using Adobe tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {skill.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{skill.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm font-sans">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
