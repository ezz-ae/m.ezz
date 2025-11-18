
import TimelineView from "@/components/TimelineView";
import FooterMinimal from "@/components/FooterMinimal";

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
