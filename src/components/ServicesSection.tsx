import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Video, 
  Bot, 
  Lightbulb, 
  Smartphone, 
  Printer, 
  Clapperboard, 
  Building2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video & Motion Studio",
    description: "Brand films, commercials, reels, CGI, VFX, 3D product films",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Bot,
    title: "AI Creative Studio",
    description: "Generative visuals, AI videos, automated content systems",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Lightbulb,
    title: "Branding & Identity",
    description: "Brand strategy, positioning, visual identity, storytelling",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Smartphone,
    title: "Social Media & Content",
    description: "Strategy, posts, reels, campaigns, growth systems",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Printer,
    title: "Print & Campaigns",
    description: "Print ads, outdoor, brochures, offline-online integration",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Clapperboard,
    title: "Creative Direction",
    description: "Concept development, art direction, campaign leadership",
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    icon: Building2,
    title: "Space & Experiential",
    description: "Retail spaces, exhibitions, events, installations",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Sparkles,
    title: "And Beyond",
    description: "Emerging media, interactive experiences, future formats",
    color: "from-primary/20 to-gold-light/20",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-charcoal">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            360° Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Full-Spectrum <span className="text-gradient">Creative</span> Services
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            From AI-powered innovation to timeless craftsmanship, we deliver integrated 
            solutions across every creative discipline.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-foreground/60 font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border border-primary/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
