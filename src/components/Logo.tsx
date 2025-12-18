import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: "text-base" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative"
        style={{ width: icon, height: icon }}
      >
        <img 
          src="/logo.png" 
          alt="IdentityBrand Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <span className={`font-display ${text} font-semibold text-foreground tracking-tight hidden sm:block`}>
          Identity<span className="text-primary">Brand</span>
        </span>
      )}
    </a>
  );
};