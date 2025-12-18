import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They don't just execute—they elevate. Every project becomes a masterpiece.",
    author: "Sarah Chen",
    role: "CMO, Global Tech Company",
  },
  {
    quote: "The perfect blend of creative vision and strategic thinking. Truly world-class.",
    author: "Michael Torres",
    role: "Brand Director, Fortune 500",
  },
  {
    quote: "Their AI-powered approach revolutionized how we create content at scale.",
    author: "Emma Williams",
    role: "VP Marketing, Luxury Brand",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Words from <span className="text-gradient">Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl border border-border bg-card/30"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              <p className="font-display text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="font-body font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="font-body text-sm text-foreground/50">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
