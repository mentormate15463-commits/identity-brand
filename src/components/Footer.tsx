import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">I</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              Identity<span className="text-primary">Brand</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-foreground/50 text-center">
            © {new Date().getFullYear()} IdentityBrand. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
