
// components/NowSection.tsx

export default function NowSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-sm tracking-[0.35em] uppercase text-neutral-500">
        What I’m open to now
      </h2>
      <p className="text-sm md:text-base text-neutral-300">
        I’m interested in working with people and institutions who want to take
        AI beyond “tools” and into real intelligence architecture.
      </p>

      <ul className="space-y-3 text-sm md:text-base text-neutral-200">
        <li>— Designing AI memory / forgetting architectures (FCT / Forgetence).</li>
        <li>— Building AI-native OS layers (NotefullBook, NotebookML, AIXSELF).</li>
        <li>— Real estate intelligence & tokenisation models (DLDCHAIN, Mashroi, EBRAM).</li>
        <li>— Security / trap simulations for real-world phishing and crypto awareness.</li>
        <li>— Deep workshops & talks on AI, cognition, and behavioural intelligence.</li>
      </ul>
    </div>
  );
}
