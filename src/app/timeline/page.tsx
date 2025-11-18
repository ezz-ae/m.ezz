
import type { Metadata } from 'next';
import TimelineView from "@/components/TimelineView";
import FooterMinimal from "@/components/FooterMinimal";

export const metadata: Metadata = {
    title: 'Intelligence Timeline',
    description: 'A map of how marketing, traps, puzzles, AI, and real estate converge into one intelligence system.',
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
