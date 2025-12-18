import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Palette, Film, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, label: "Discover", description: "Deep research & insights" },
  { icon: Target, label: "Strategize", description: "Define positioning & goals" },
  { icon: Palette, label: "Create", description: "Design & conceptualize" },
  { icon: Film, label: "Produce", description: "Execute with excellence" },
  { icon: Rocket, label: "Launch", description: "Deploy & activate" },
  { icon: TrendingUp, label: "Scale", description: "Optimize & grow" },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            From <span className="italic">Concept</span> to{" "}
            <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            A proven methodology that transforms ambitious ideas into impactful brand experiences.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-body text-primary/50 font-semibold">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="relative mx-auto w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 border border-border group-hover:border-primary/30">
                  <step.icon className="w-8 h-8 text-primary" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/20" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-foreground/50 font-body text-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
