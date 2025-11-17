import { ContactForm } from '@/components/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Let's discuss how we can bring your vision to life.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
        <div className="space-y-8 md:col-span-2">
          <h2 className="font-headline text-2xl font-semibold">
            Contact Information
          </h2>
          <p className="text-muted-foreground">
            Reach out to us via phone, email, or by filling out the contact form. We look forward to hearing from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:studio@ezz.ae" className="text-muted-foreground transition-colors hover:text-primary">
                studio@ezz.ae
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+971 4 123 4567</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">
                Dubai Design District (d3), Dubai, UAE
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
