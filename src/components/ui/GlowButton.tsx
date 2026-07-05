import Link from "next/link";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  onClick?: () => void;
};

export default function GlowButton({
  href,
  children,
  size = "md",
  variant = "solid",
  onClick,
}: GlowButtonProps) {
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    solid:
      "bg-cyan/10 text-cyan-bright glow-ring hover:bg-cyan/20 hover:text-white",
    outline:
      "border border-line text-ink-muted hover:border-cyan/50 hover:text-cyan-bright",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-mono uppercase tracking-[0.15em] transition-all duration-300 ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
