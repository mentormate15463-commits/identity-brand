import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: "01", label: "Discover", description: "Deep research & insights" },
  { number: "02", label: "Strategize", description: "Define positioning & goals" },
  { number: "03", label: "Create", description: "Design & conceptualize" },
  { number: "04", label: "Produce", description: "Execute with excellence" },
  { number: "05", label: "Launch", description: "Deploy & activate" },
  { number: "06", label: "Scale", description: "Optimize & grow" },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] max-w-3xl">
            From concept to scale
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mb-4">
                <span className="text-primary/40 font-body text-xs tracking-wide">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-normal text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {step.label}
              </h3>
              <p className="text-foreground/40 font-body text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
