import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50 bg-gradient-to-b from-background via-background/95 to-charcoal/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo size="sm" showText={true} />
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-sm text-foreground/60 text-center"
          >
            © {new Date().getFullYear()} IdentityBrand. All rights reserved.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a 
              href="#" 
              className="font-body text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-body text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </motion.div>
        </div>
        
        {/* Developer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center pt-6 border-t border-border/30"
        >
          <p className="font-body text-sm text-foreground/50">
            Developed by{" "}
            <a 
              href="https://eliteforums.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold inline-flex items-center gap-1 group"
            >
              eliteforums.in
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};