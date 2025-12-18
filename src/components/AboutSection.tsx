import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Creativity",
    description: "Leveraging cutting-edge AI to amplify human creativity and deliver unprecedented solutions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Multicultural teams in Mumbai & Dubai crafting experiences that resonate worldwide.",
  },
  {
    icon: Zap,
    title: "End-to-End Execution",
    description: "From strategy to launch, we handle every touchpoint with precision and excellence.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              About the Studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Where Human{" "}
              <span className="italic text-primary">Creativity</span> Meets{" "}
              <span className="text-gradient">AI Intelligence</span>
            </h2>
            <p className="text-foreground/60 font-body text-lg leading-relaxed mb-8">
              We are a global collective of strategists, designers, filmmakers, and technologists 
              united by a passion for crafting transformative brand experiences. Our work spans 
              screens, spaces, and emerging technologies—building brands that captivate and endure.
            </p>
            <p className="text-foreground/60 font-body text-lg leading-relaxed">
              As your long-term creative partner, we don't just execute—we think, strategize, 
              and innovate alongside you, turning ambitious visions into tangible realities that 
              resonate across cultures and platforms.
            </p>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-6 rounded-2xl glass hover:bg-secondary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
        >
          {[
            { number: "150+", label: "Global Brands" },
            { number: "500+", label: "Projects Delivered" },
            { number: "12", label: "Years Experience" },
            { number: "2", label: "Global Studios" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60 font-body text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
