
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type MindMapNodeProps = {
  label: string;
  description: string;
  isCentral?: boolean;
};

export function MindMapNode({
  label,
  description,
  isCentral = false,
}: MindMapNodeProps) {
  return (
    <Card
      className={cn(
        'flex h-32 w-48 flex-col items-center justify-center rounded-xl p-4 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105',
        isCentral
          ? 'border-2 border-primary bg-primary/10'
          : 'bg-card'
      )}
    >
      <h3
        className={cn(
          'font-headline font-bold',
          isCentral ? 'text-2xl text-primary' : 'text-xl'
        )}
      >
        {label}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </Card>
  );
}
