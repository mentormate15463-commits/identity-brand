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
      {/* Custom Logo Mark - Intertwined I & B */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative"
        style={{ width: icon, height: icon }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background glow */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38 75% 55%)" />
              <stop offset="50%" stopColor="hsl(38 85% 65%)" />
              <stop offset="100%" stopColor="hsl(28 80% 50%)" />
            </linearGradient>
            <linearGradient id="goldGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38 65% 45%)" />
              <stop offset="100%" stopColor="hsl(28 70% 40%)" />
            </linearGradient>
          </defs>
          
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          
          {/* Inner geometric shape - Abstract IB monogram */}
          <path
            d="M16 12h3v24h-3V12z"
            fill="url(#goldGradient)"
          />
          <path
            d="M22 12h8c4 0 7 2.5 7 6s-2.5 5.5-6 6c4 0.5 7 3 7 7s-3 6-7 6h-9V12zm3 10h5c2.5 0 4-1.5 4-3.5S32.5 15 30 15h-5v7zm0 12h6c2.5 0 4.5-1.5 4.5-4s-2-4-4.5-4h-6v8z"
            fill="url(#goldGradient)"
          />
          
          {/* Accent line */}
          <line
            x1="16"
            y1="24"
            x2="22"
            y2="24"
            stroke="url(#goldGradientDark)"
            strokeWidth="2"
          />
        </svg>
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
