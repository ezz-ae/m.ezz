// src/components/notebooks/ScrollLessonNotebook.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const Stanza = ({ children, className = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.1 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className={`text-lg md:text-xl leading-relaxed text-neutral-300 mb-10 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export function ScrollLessonNotebook() {
  return (
    <div className="max-w-5xl mx-auto py-32 px-4 font-headline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Arabic Column */}
            <div dir="rtl" className="text-right border-r border-neutral-800 pr-8">
                <Stanza>
                    اللغة تدرك كل شيء… وتترك كل شيء.
                    <br />
                    تبدو كأنها تمتلك الكون، بينما لا تحمل منه إلا شكلاً.
                </Stanza>
                <Stanza>
                    اللغة ليست معرفة، بل وسيلة لتمرير المعرفة.
                    <br />
                    ليست حقيقة، بل جسر إلى الحقيقة.
                </Stanza>
                <Stanza>
                    المعنى لا يُولد لغويًا.
                    <br />
                    المعنى يُولد خامًا… لغة الإنسان الداخلية.
                    <br />
                    ثم تأتي اللغة كأداة نحت.
                </Stanza>
                <Stanza>
                    اللغة لا تقيد الحقيقة؛
                    <br />
                    اللغة تقيد قدرتنا على نقلها.
                </Stanza>
                 <Stanza>
                    من يتقن اللغة لا يصبح فصيحًا…
                    <br />
                    بل يصبح حرًا.
                    <br />
                    ومن يفهم محدودية اللغة، يبدأ بفهم محدودية نفسه.
                </Stanza>
            </div>

            {/* English Column */}
            <div className="pl-8">
                 <Stanza>
                    Language perceives everything… and misses everything.
                    <br />
                    It looks like it contains the world, yet it captures only the outline of it.
                </Stanza>
                <Stanza>
                    Language is not knowledge —
                    <br />
                    it’s the vehicle that carries knowledge.
                    <br/>
                    It is not truth — it’s the interface to it.
                </Stanza>
                <Stanza>
                    Meaning is not born linguistic.
                    <br />
                    Meaning is born raw — the human inner language.
                    <br />
                    Then language comes as a sculpting tool.
                </Stanza>
                <Stanza>
                    Language does not restrict truth;
                    <br />
                    language restricts our ability to transfer it.
                </Stanza>
                <Stanza>
                    Mastering language doesn’t make you elegant —
                    <br />
                    it makes you free.
                    <br />
                    And understanding the limits of language is the moment you begin understanding the limits of yourself.
                </Stanza>
            </div>
        </div>
    </div>
  );
}
