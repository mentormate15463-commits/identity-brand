import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "01",
    title: "AI-Powered Creativity",
    description: "We leverage cutting-edge artificial intelligence to amplify human creativity—delivering solutions that were previously impossible.",
  },
  {
    number: "02",
    title: "Global Perspective",
    description: "With studios in Mumbai and Dubai, our multicultural teams craft experiences that resonate across borders and cultures.",
  },
  {
    number: "03",
    title: "End-to-End Execution",
    description: "From initial strategy through final delivery, we handle every touchpoint with precision, care, and excellence.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28"
          >
            <span className="text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
              The Studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-foreground leading-[1.1] max-w-4xl">
              Where human{" "}
              <em className="text-primary">creativity</em> meets{" "}
              <span className="text-gradient">machine intelligence</span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-foreground/70 font-body text-lg md:text-xl leading-relaxed mb-6">
                We are a global collective of strategists, designers, filmmakers, and technologists 
                united by a singular passion: crafting transformative brand experiences that 
                captivate and endure.
              </p>
              <p className="text-foreground/50 font-body text-base leading-relaxed">
                Our work spans screens, spaces, and emerging technologies. As your long-term 
                creative partner, we don't just execute—we think, strategize, and innovate 
                alongside you.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <span className="text-primary/40 font-body text-sm font-medium tracking-wide">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-normal text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/50 font-body text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/50"
          >
            {[
              { number: "150+", label: "Global Brands" },
              { number: "500+", label: "Projects Delivered" },
              { number: "12", label: "Years Experience" },
              { number: "2", label: "Global Studios" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/40 font-body text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
