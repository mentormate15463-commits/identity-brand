import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "They don't just execute—they elevate. Every project becomes a masterpiece of strategic thinking and creative excellence.",
    author: "Sarah Chen",
    role: "CMO, Global Tech Company",
  },
  {
    quote: "The perfect blend of creative vision and strategic thinking. Their AI-powered approach revolutionized our content production.",
    author: "Michael Torres",
    role: "Brand Director, Fortune 500",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground">
            Words from leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              <footer>
                <p className="font-body font-medium text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="font-body text-foreground/40 text-xs mt-1">
                  {testimonial.role}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
