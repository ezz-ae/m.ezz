
import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavCardProps = {
  href: string;
  image: string;
  title: string;
  description: string;
};

export function NavCard({ href, image, title, description }: NavCardProps) {
  const cardImage = getImage(image);

  return (
    <Link href={href} className={cn("block group", "animate-scroll")}>
      <Card className="relative h-80 w-full overflow-hidden rounded-xl transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20">
        <Image
          src={cardImage.imageUrl}
          alt={cardImage.description}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          data-ai-hint={cardImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-headline text-2xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-white/80">{description}</p>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
