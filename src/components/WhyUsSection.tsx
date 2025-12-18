import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Rocket, Brain, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted by Global Brands",
    description: "A proven track record of delivering excellence for the world's most demanding brands.",
  },
  {
    icon: Brain,
    title: "Strategy-Led, Design-Driven",
    description: "Every creative decision is rooted in strategic insight and human-centered design.",
  },
  {
    icon: Rocket,
    title: "AI-Powered Innovation",
    description: "Cutting-edge technology amplifies our creative capabilities and accelerates delivery.",
  },
  {
    icon: MessageCircle,
    title: "Consistent Storytelling",
    description: "Unified brand narratives that resonate across every touchpoint and channel.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-charcoal">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              Why Work With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Your Vision,{" "}
              <span className="italic">Our</span>{" "}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-foreground/60 font-body text-lg leading-relaxed">
              We combine strategic thinking with creative excellence and technological 
              innovation to deliver transformative brand experiences that drive real results.
            </p>
          </motion.div>

          {/* Right - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 rounded-2xl border border-border hover:border-primary/30 bg-card/30 hover:bg-card/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-foreground/60 font-body text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
