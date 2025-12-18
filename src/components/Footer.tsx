import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
      </div>
    </footer>
  );
};
