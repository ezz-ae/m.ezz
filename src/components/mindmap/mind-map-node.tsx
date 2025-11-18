
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type MindMapNodeProps = {
  label: string;
  description: string;
  isCentral?: boolean;
  isSubNode?: boolean;
};

export function MindMapNode({
  label,
  description,
  isCentral = false,
  isSubNode = false,
}: MindMapNodeProps) {
  return (
    <Card
      className={cn(
        'flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl p-4 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105',
        isCentral && 'border-2 border-primary bg-primary/10',
        !isCentral && !isSubNode && 'bg-card',
        isSubNode && 'bg-card/80 backdrop-blur-sm'
      )}
    >
      <h3
        className={cn(
          'font-headline font-bold',
          isCentral && 'text-2xl text-primary',
          !isCentral && !isSubNode && 'text-xl',
          isSubNode && 'text-base'
        )}
      >
        {label}
      </h3>
      <p className={cn(
          'mt-1 text-muted-foreground',
          isSubNode ? 'text-xs' : 'text-sm'
      )}>
        {description}
      </p>
    </Card>
  );
}
