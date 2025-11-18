
import SiteHeader from "@/components/SiteHeader";
import TimelineView from "@/components/TimelineView";
import FooterMinimal from "@/components/FooterMinimal";

export default function TimelinePage() {
    return (
        <div className="bg-black min-h-screen">
            <SiteHeader />
            <main className="py-16 px-6">
               <TimelineView />
            </main>
            <FooterMinimal />
        </div>
    );
}
