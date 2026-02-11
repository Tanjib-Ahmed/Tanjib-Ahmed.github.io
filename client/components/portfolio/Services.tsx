import { motion } from "framer-motion";
import { Palette, Share2, Layers, Pencil, Printer } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Identity",
    description: "Creating unique visual identities that capture the essence of your brand and connect with your audience."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Marketing Design",
    description: "Designing impactful marketing collateral for both digital and print media that drives engagement."
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Print Design",
    description: "Editorial design and high-quality print materials that make a lasting physical impression."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left -z-10" />
      <div className="container mx-auto">
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 bg-gradient-to-br from-violet-300 via-primary to-purple-400 bg-clip-text text-transparent pb-2">Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Merging artistic vision with strategic thinking to create impactful digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 glass-card rounded-[2rem] hover:-translate-y-2"
            >
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
