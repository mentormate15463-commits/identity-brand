import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <Logo size="sm" showText={true} />

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
        
        {/* Made by credit */}
        <div className="text-center pt-4 border-t border-border/50">
          <p className="font-body text-xs text-foreground/40">
            Made by{" "}
            <a 
              href="https://eliteforums.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              eliteforums.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};