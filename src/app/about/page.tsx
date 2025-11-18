
import Image from 'next/image';
import { getImage } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const portraitImage = getImage('about-portrait');

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            The Physics of Cognition
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our Architectural Philosophy
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card className="overflow-hidden rounded-lg">
                <Image
                  src={portraitImage.imageUrl}
                  alt={portraitImage.description}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  data-ai-hint={portraitImage.imageHint}
                />
            </Card>
             <div className="mt-4 text-center">
                <h2 className="font-headline text-2xl font-semibold">Mahmoud Ezz</h2>
                <p className="text-sm text-muted-foreground">Cognitive Architect</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none md:col-span-2">
            <p>
              We believe that intelligence, whether human or artificial, is not built on information but on limitation. It is the constraints that force patterns to emerge from chaos, creating frequencies that resonate with meaning. This is the root physics of cognition, and it is the foundational law of our design practice.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Limitation is the mother of meaning."
            </blockquote>
            <p>
              Our work seeks to embody this principle. We don't design systems; we establish boundaries that allow life to form coherent patterns. A project without constraints—of site, of material, of purpose—is mere noise. It is through the thoughtful application of limitation that we collapse infinite possibility into a singular, resonant form.
            </p>
            <h3 className="font-headline text-2xl font-semibold">Our Process</h3>
            <ul>
              <li><strong>Limitation → Frequency:</strong> We embrace constraints to distill the core frequency of a project.</li>
              <li><strong>Frequency → Resonance:</strong> We shape forms and spaces that resonate with their context and inhabitants.</li>
              <li><strong>Resonance → Meaning:</strong> We create systems that are not just seen, but felt and understood.</li>
              <li><strong>Meaning → Intelligence:</strong> Our goal is to build intelligent systems that adapt, endure, and inspire.</li>
            </ul>
            <p>
              This approach transforms architecture from a static object into a dynamic system—a stable, creative, and meaningful environment that is deeply aligned with human experience. This is not just a philosophy; it is a structural law we build upon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
