import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Nike", "Apple", "Google", "Netflix", "Coca-Cola",
  "Adidas", "BMW", "Airbnb", "Spotify", "Amazon",
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-foreground/40 font-body text-xs font-medium tracking-[0.2em] uppercase">
            Trusted by world-class brands
          </span>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-4xl mx-auto"
        >
          {clients.map((client, index) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-light text-foreground/20 hover:text-foreground/40 transition-colors duration-500 cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-foreground/30 font-body text-xs mt-12 tracking-wide"
        >
          Representative client collaborations & global brand work
        </motion.p>
      </div>
    </section>
  );
};
