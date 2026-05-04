import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ children, className = "", href, variant = "primary", ...props }: ButtonProps) {
  const variantClass =
    variant === "primary" ? "primary-button" : variant === "secondary" ? "secondary-button" : "ghost-button";
  const classes = `${variantClass} ${className}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
