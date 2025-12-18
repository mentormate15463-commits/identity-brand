import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Video & Motion",
    description: "Brand films, commercials, reels, CGI, VFX, 3D product visualization",
    capabilities: ["Brand Films", "Commercials", "Product CGI", "Motion Graphics"],
  },
  {
    id: "02",
    title: "AI Creative Studio",
    description: "Generative visuals, AI-powered video, automated content systems",
    capabilities: ["Generative Art", "AI Video", "Content Automation", "Custom Models"],
  },
  {
    id: "03",
    title: "Branding & Identity",
    description: "Brand strategy, positioning, visual identity systems, storytelling",
    capabilities: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Naming"],
  },
  {
    id: "04",
    title: "Social & Content",
    description: "Strategy, content creation, campaigns, growth systems at scale",
    capabilities: ["Content Strategy", "Social Campaigns", "Influencer", "Growth"],
  },
  {
    id: "05",
    title: "Print & Campaigns",
    description: "Print advertising, outdoor, brochures, integrated campaign execution",
    capabilities: ["Print Ads", "OOH", "Brochures", "Integrated Campaigns"],
  },
  {
    id: "06",
    title: "Space & Experiential",
    description: "Retail environments, exhibitions, events, immersive installations",
    capabilities: ["Retail Design", "Exhibitions", "Events", "Installations"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-40 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
            Capabilities
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] max-w-2xl">
              Full-spectrum creative services
            </h2>
            <p className="text-foreground/50 font-body text-base max-w-md leading-relaxed">
              From AI-powered innovation to timeless craftsmanship, we deliver 
              integrated solutions across every creative discipline.
            </p>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-border/50">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-border/50 py-8 md:py-10 cursor-pointer transition-colors duration-300 hover:bg-secondary/30"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="text-primary/50 font-body text-xs tracking-wide w-12">
                  {service.id}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-foreground flex-1 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                  <ArrowUpRight 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`} 
                  />
                </h3>

                {/* Description - Hidden on mobile, shown on hover for desktop */}
                <p className={`text-foreground/50 font-body text-sm max-w-xs transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "md:opacity-0"
                }`}>
                  {service.description}
                </p>

                {/* Capabilities Tags */}
                <div className={`flex flex-wrap gap-2 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "md:opacity-0"
                }`}>
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <span 
                      key={cap} 
                      className="px-3 py-1 rounded-full border border-border/50 text-foreground/40 font-body text-xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
