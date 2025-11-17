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
