
import type { Metadata } from 'next';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Mahmoud Ezz for research collaboration, system architecture sessions, and workshops.',
};

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen pt-24">
            <main className="py-16 px-6">
               <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-3xl md:text-4xl font-light text-neutral-50">Contact</h1>
                    <div className="max-w-xl mx-auto">
                         <p className="text-lg text-neutral-300">
                            I’m interested in working with people and institutions who want to take AI beyond “tools” and into real intelligence architecture.
                        </p>
                        <p className="mt-8 text-base text-neutral-400">
                            For research collaboration, system architecture sessions, and workshops, please reach out via email.
                        </p>
                        <p className="mt-4 text-lg text-neutral-100 font-mono">
                            <a href="mailto:hello@ezz.ae" className="hover:underline">hello@ezz.ae</a>
                        </p>
                    </div>
                </div>
            </main>
            <FooterMinimal />
        </div>
    );
}
