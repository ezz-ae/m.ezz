
// src/components/TimelineView.tsx

const timelinePhases = [
    {
        phase: 0,
        tag: "Attention Architect",
        title: "Instinct Layer",
        description: "Watching people, campaigns, reactions. Obsessed with personalization and behaviour change. Realized value is in what people notice and what they ignore."
    },
    {
        phase: 1,
        tag: "Market System Builder",
        title: "Structure Layer",
        description: "Stopped caring about single ads and started caring about systems. Built marketing engines and saw patterns in ecosystems instead of just tactics."
    },
    {
        phase: 2,
        tag: "Infrastructure Mind",
        title: "OS Layer",
        description: "Moved from marketing real estate to redesigning how real estate works. Vision of sovereign real estate infrastructure, not just listings."
    },
    {
        phase: 3,
        tag: "Defensive Intelligence Architect",
        title: "Trap & Security Layer",
        description: "Started attacking systems to protect them. Designed phishing traps and scam simulators. Realized security is a cognitive design problem."
    },
    {
        phase: 4,
        tag: "Pattern Hunter",
        title: "Puzzle & Cryptic Layer",
        description: "Used puzzles (Bitcoin, chain analysis) as a lab for studying search, bias, pattern, and failure. Hunted for patterns in complex systems."
    },
    {
        phase: 5,
        tag: "Language & OS Architect",
        title: "AI OS Layer",
        description: "Stopped seeing AI as a tool and started seeing it as a language of organization. Built concepts for AI as an OS, not a chat box."
    },
    {
        phase: 6,
        tag: "Cognitive Safety Architect",
        title: "Forgetting Layer",
        description: "Realized the missing piece: forgetting. Developed FCT and Forgetence. AI storing everything is structurally misaligned with how humans stay sane."
    },
    {
        phase: 7,
        tag: "Intelligence System Architect",
        title: "Meta-Intelligence Layer",
        description: "Building ezz.ae and Forgain as full-scale expressions of this thinking. Intelligence as a living, fading, resonating field."
    }
];

export default function TimelineView() {
    return (
        <div className="max-w-4xl mx-auto py-16">
            <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mb-4">Intelligence Timeline</h1>
            <p className="text-neutral-400 mb-12">A cognitive evolution, not a CV.</p>

            <div className="relative space-y-12">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />
                {timelinePhases.map((phase, index) => (
                    <div key={phase.phase} className="relative flex items-start">
                        <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rounded-full" />
                        <div className={`w-full p-6 rounded-2xl md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-[50%] md:pl-12'}`}>
                            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">{phase.tag}</p>
                            <h2 className="text-lg md:text-xl font-medium text-neutral-100 mt-2">{phase.title}</h2>
                            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{phase.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
