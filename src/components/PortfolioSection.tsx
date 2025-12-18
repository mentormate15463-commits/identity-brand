import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "AI", "Branding", "Video", "CGI", "Social", "Print", "Space"];

const projects = [
  {
    title: "Neural Brand Identity",
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    description: "AI-generated visual system for tech unicorn",
  },
  {
    title: "Luxury Auto Launch",
    category: "Video",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    description: "Cinematic campaign for premium automotive brand",
  },
  {
    title: "Fashion Week Experience",
    category: "Space",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Immersive retail installation in Milan",
  },
  {
    title: "Product CGI Series",
    category: "CGI",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
    description: "Photorealistic 3D renders for global FMCG",
  },
  {
    title: "Social Content Engine",
    category: "Social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Scalable content system for lifestyle brand",
  },
  {
    title: "Heritage Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    description: "Complete identity transformation for legacy brand",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto mb-12">
            Explore our portfolio of transformative brand experiences across industries and mediums.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/60 hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary font-body text-xs font-semibold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-foreground/60 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {project.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
