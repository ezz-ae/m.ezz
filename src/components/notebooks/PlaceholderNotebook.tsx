// A placeholder component for notebooks that are not yet created
export const PlaceholderNotebook: React.FC<{ topic: string }> = ({ topic }) => (
    <div className="text-center text-neutral-400 py-20 prose prose-invert max-w-3xl mx-auto">
        <h1>{topic}</h1>
        <p>This notebook will be added. It covers the topic of {topic}.</p>
    </div>
);
