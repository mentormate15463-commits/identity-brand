import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { icon: 40, text: "text-base" },
    md: { icon: 48, text: "text-xl" },
    lg: { icon: 64, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      {/* Premium Logo Image */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative"
        style={{ width: icon, height: icon }}
      >
        <img 
          src="/logo.png" 
          alt="IdentityBrand Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
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