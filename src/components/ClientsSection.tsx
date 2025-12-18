import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Nike", "Apple", "Google", "Netflix", "Coca-Cola",
  "Adidas", "BMW", "Airbnb", "Spotify", "Amazon",
  "Meta", "Samsung", "Uber", "LinkedIn", "Adobe"
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-background" />
      
      <div ref={ref} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            World-Class <span className="text-gradient">Brands</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First Row */}
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="font-display text-2xl md:text-3xl font-semibold text-foreground/20 hover:text-foreground/50 transition-colors duration-300 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-foreground/40 font-body text-xs mt-12 tracking-wide"
        >
          *Representative client collaborations & global brand work
        </motion.p>
      </div>
    </section>
  );
};
