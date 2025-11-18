
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavCardProps = {
  href: string;
  title: string;
  description: string;
};

export function NavCard({ href, title, description }: NavCardProps) {
  return (
    <Link href={href} className={cn("block group", "animate-scroll")}>
      <Card className="relative h-80 w-full overflow-hidden rounded-xl transition-all duration-500 ease-out bg-transparent border-2 border-card hover:border-primary hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-end p-6">
        <div className="text-foreground">
          <h3 className="font-headline text-2xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
