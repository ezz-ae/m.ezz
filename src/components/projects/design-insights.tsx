'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAIDesignInsights } from '@/lib/actions';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';

type DesignInsightsProps = {
  designDescription: string;
  keyElements: string;
};

export function DesignInsights({ designDescription, keyElements }: DesignInsightsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    setInsights('');
    const result = await getAIDesignInsights({ designDescription, keyElements });
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setInsights(result.data);
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Design Analysis
        </CardTitle>
        <CardDescription>
          Generate AI-powered insights on the key architectural concepts of this project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {insights && !isLoading && (
          <div className="prose prose-sm max-w-none rounded-md border bg-background p-4">
            <p>{insights}</p>
          </div>
        )}
        {isLoading && (
          <div className="flex min-h-[100px] items-center justify-center rounded-md border border-dashed">
            <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto mb-2 h-6 w-6 animate-spin" />
                <p>Generating analysis...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex min-h-[100px] flex-col items-center justify-center rounded-md border border-destructive/50 bg-destructive/10 p-4 text-center text-destructive">
            <AlertCircle className="mb-2 h-6 w-6" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}
        {!insights && !isLoading && !error && (
            <div className="flex min-h-[100px] items-center justify-center rounded-md border border-dashed">
                <p className="text-center text-sm text-muted-foreground">Click the button to generate insights.</p>
            </div>
        )}
        <Button onClick={handleGenerate} disabled={isLoading} className="mt-4 w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Insights'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
