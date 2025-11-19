
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <Link 
    href="/" 
    className={cn(
      "font-headline text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary",
      className
    )}
  >
    EZZ.AE
  </Link>
);

export const AixaLogo = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110 20"
      className={cn("h-5 w-auto text-foreground", className)}
      fill="currentColor"
    >
      <path d="M0 20 L5 10 L10 20 L8 20 L5 14 L2 20 Z" />
      <path d="M15 20 L20 10 L25 20 L23 20 L20 14 L17 20 Z" />
      <path d="M30 10 L40 20 M30 20 L40 10" stroke="currentColor" strokeWidth="2" />
      <path d="M45 20 L55 10 L65 20 M50 16 L60 16" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);
