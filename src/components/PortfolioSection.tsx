import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Branding", "Video", "AI", "Space"];

const projects = [
  {
    title: "Luxe Automotive",
    category: "Video",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    title: "Neural Identity",
    category: "AI",
    year: "2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  {
    title: "Fashion Forward",
    category: "Space",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Heritage Rebrand",
    category: "Branding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
  },
  {
    title: "Product CGI",
    category: "Video",
    year: "2024",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
  },
  {
    title: "Social Engine",
    category: "AI",
    year: "2023",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1]">
              Case Studies
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-body text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "text-primary"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-normal text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/40 font-body text-sm mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-foreground/30 font-body text-sm">
                  {project.year}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
