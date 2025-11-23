import type { Metadata } from 'next';
import TimelineView from "@/components/TimelineView";
import { FooterMinimal } from "@/components/FooterMinimal";

export const metadata: Metadata = {
    title: 'FORGAIN SYSTEM – Contribution Layers Map',
    description: 'A unified model of where the work contributes, how it contributes, and what domain it transforms.',
};

export default function TimelinePage() {
    return (
        <div className="bg-black min-h-screen pt-24">
            <main className="py-16 px-6">
               <TimelineView />
            </main>
            <FooterMinimal />
        </div>
    );
}
