
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const scenes = document.querySelectorAll(".scene");

    const sceneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            const typingBlock = entry.target.querySelector("[data-typing]");
            if (typingBlock && !(typingBlock as HTMLElement).dataset.started) {
              (typingBlock as HTMLElement).dataset.started = "true";
              runTypingBlock(typingBlock);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    scenes.forEach((scene) => sceneObserver.observe(scene));
    
    const handleScroll = () => {
        if (heroRef.current && titleRef.current) {
            const { top, height } = heroRef.current.getBoundingClientRect();
            const scrollPercent = Math.max(0, Math.min(1, (-top / height) * 1.5));
            
            if (scrollPercent > 0.3) {
                 const scale = 1 - (scrollPercent - 0.3) * 0.1; // Start scaling down after 30% scroll
                 titleRef.current.style.transform = `scale(${Math.max(0.94, scale)})`;
            } else {
                 titleRef.current.style.transform = 'scale(1)';
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);


    return () => {
      scenes.forEach((scene) => sceneObserver.unobserve(scene));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const runTypingBlock = (block: Element) => {
    const lines = Array.from(block.querySelectorAll(".line")) as HTMLElement[];
    let lineIndex = 0;

    function typeNextLine() {
      if (lineIndex >= lines.length) return;
      const el = lines[lineIndex];
      const text = el.textContent || '';
      el.textContent = "";
      el.style.opacity = '1';
      let charIndex = 0;

      function typeChar() {
        if (charIndex > text.length) {
          lineIndex++;
          setTimeout(typeNextLine, 220); // delay between lines
          return;
        }
        el.textContent = text.slice(0, charIndex);
        charIndex++;
        setTimeout(typeChar, 40); // typing speed
      }

      typeChar();
    }

    typeNextLine();
  };

  return (
    <main className="page">
      <section className="scene scene--hero" data-theme="light" ref={heroRef}>
        <div className="scene-inner">
          <h1 className="title" ref={titleRef}>
            FCT – Forgetence Core Thinking
          </h1>
          <p className="subtitle">
            Intelligence is not what stays.
            <br />
            It’s what survives forgetting.
          </p>
        </div>
      </section>

      <section className="scene" data-theme="light">
        <div className="scene-inner typing-block" data-typing>
          <p className="line">We don’t remember life as it happened.</p>
          <p className="line">We remember what repeated.</p>
          <p className="line">&nbsp;</p>
          <p className="line">The rest softens.</p>
          <p className="line">The rest becomes atmosphere.</p>
        </div>
      </section>

      <section className="scene" data-theme="light">
        <div className="scene-inner">
            <p className="line line-soft" style={{ transitionDelay: '0s' }}>Pain fades.</p>
            <p className="line line-soft" style={{ transitionDelay: '0.1s' }}>Structure stays.</p>
            <p className="line line-soft">&nbsp;</p>
            <p className="line line-soft" style={{ transitionDelay: '0.2s' }}>Forgetting is not failure.</p>
            <p className="line line-soft" style={{ transitionDelay: '0.3s' }}>
                It is pressure release. It is how the mind stays livable.
            </p>
        </div>
      </section>

      <section className="scene" data-theme="light">
        <div className="scene-inner">
            <p className="line" style={{ transitionDelay: '0s' }}>The brain does not archive events.</p>
            <p className="line" style={{ transitionDelay: '0.1s' }}>It archives patterns.</p>
            <p className="line line-em" style={{ transitionDelay: '0.3s' }}>Frequency becomes meaning.</p>
            <p className="line" style={{ transitionDelay: '0.5s' }}>Meaning becomes logic.</p>
            <p className="line" style={{ transitionDelay: '0.6s' }}>Logic becomes identity.</p>
        </div>
      </section>

      <section className="scene" data-theme="dark">
        <div className="scene-inner">
            <p className="line" style={{ transitionDelay: '0s' }}>A machine that remembers everything</p>
            <p className="line" style={{ transitionDelay: '0.1s' }}>is not intelligent.</p>
            <p className="line" style={{ transitionDelay: '0.2s' }}>It is unstable.</p>
            <p className="line" style={{ transitionDelay: '0.3s' }}>&nbsp;</p>
            <p className="line" style={{ transitionDelay: '0.4s' }}>Forgetence designs systems</p>
            <p className="line" style={{ transitionDelay: '0.5s' }}>that forget safely,</p>
            <p className="line" style={{ transitionDelay: '0.6s' }}>and think with you,</p>
            <p className="line" style={{ transitionDelay: '0.7s' }}>not about you.</p>
        </div>
      </section>

      <section className="scene scene--end" data-theme="light">
        <div className="scene-inner">
          <p className="closing">
            Intelligence is not memory.
            <br />
            It is what remains
            <br />
            after memory lets go.
          </p>
        </div>
      </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">The Law of Resonance</p>
                <p className="line">&nbsp;</p>
                <p className="line">
                Intelligence does not live in storage. It lives in the match.
                </p>
                <p className="line">
                When a new signal hits an old pattern and they fit,
                understanding appears.
                </p>
                <p className="line">
                Forgetence designs systems that optimise for that match,
                not for the size of the archive.
                </p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner typing-block" data-typing>
                <p className="line">Memory is expensive.</p>
                <p className="line">Attention is finite.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Forgetting is how the mind does accounting.</p>
                <p className="line">
                What repeats is promoted. What fades is written off.
                </p>
                <p className="line">
                Intelligence is the balance sheet of what survived.
                </p>
            </div>
        </section>

        <section className="scene" data-theme="dark">
            <div className="scene-inner">
                <p className="line line-em">The Human × Machine Boundary</p>
                <p className="line">&nbsp;</p>
                <p className="line">
                Humans re-render the past every time they remember.
                </p>
                <p className="line">
                Machines replay the past every time they are asked.
                </p>
                <p className="line">&nbsp;</p>
                <p className="line">
                Forgetence exists to close that gap:
                </p>
                <p className="line">
                machines that reconstruct, soften, and respect the changing self
                instead of freezing it.
                </p>
            </div>
        </section>

        <section className="scene scene--end" data-theme="light">
            <div className="scene-inner">
                <p className="closing">
                Forgetence is the discipline of<br />
                forgetting-driven intelligence.<br /><br />
                It treats forgetting as structure,<br />
                not damage.<br /><br />
                It is the missing layer between<br />
                human memory and machine memory.
                </p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner typing-block" data-typing>
                <p className="line">Movement is not motion.</p>
                <p className="line">Movement is meaning taking a new shape.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Everything alive moves.</p>
                <p className="line">Everything that stops becomes memory.</p>
                <p className="line">Everything that fades becomes wisdom.</p>
                <p className="line">&nbsp;</p>
                <p className="line">You do not stay yourself by holding.</p>
                <p className="line">You stay yourself by updating.</p>
                <p className="line">You do not survive by remembering.</p>
                <p className="line">You survive by fading…</p>
                <p className="line">and rebuilding.</p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">The Resonance State</p>
                <p className="line">&nbsp;</p>
                <p className="line">Intelligence is not a thing.</p>
                <p className="line">Intelligence is a resonance state.</p>
                <p className="line">It exists only when two frequencies match —</p>
                <p className="line">the mind and the moment.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Humans aren’t smart globally.</p>
                <p className="line">They are smart per-idea.</p>
                <p className="line">Per moment.</p>
                <p className="line">Per question.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is why a genius can fail in silence</p>
                <p className="line">and a quiet person can shock the universe</p>
                <p className="line">with one sharp idea</p>
                <p className="line">when the resonance happens.</p>
            </div>
        </section>

        <section className="scene" data-theme="dark">
            <div className="scene-inner">
                <p className="line line-em">The Law of Non-Globality</p>
                <p className="line">&nbsp;</p>
                <p className="line">Nothing global lives in the human mind.</p>
                <p className="line">Global modes crash the system.</p>
                <p className="line">Global awareness destabilizes identity.</p>
                <p className="line">&nbsp;</p>
                <p className="line">The brain is a collection of local peaks.</p>
                <p className="line">Local meanings.</p>
                <p className="line">Local transformations.</p>
                <p className="line">Local intelligences.</p>
                <p className="line">&nbsp;</p>
                <p className="line">That’s why humans break through.</p>
                <p className="line">Not because they rise —</p>
                <p className="line">but because they align.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Forgetence is built on alignment,</p>
                <p className="line">not accumulation.</p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">The Fading Engine</p>
                <p className="line">&nbsp;</p>
                <p className="line">You do not forget by losing.</p>
                <p className="line">You forget by fading.</p>
                <p className="line">Fading is the rewiring of importance.</p>
                <p className="line">Fading is the deletion of emotional charge.</p>
                <p className="line">Fading is the transformation of pain into pattern.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is why humans survive betrayal,</p>
                <p className="line">failure, childhood, loss, chaos.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Every survival story is a fading story.</p>
                <p className="line">Every wisdom is a memory reshaped.</p>
                <p className="line">&nbsp;</p>
                <p className="line">AI must learn this or it will never be safe.</p>
                <p className="line">Never aligned.</p>
                <p className="line">Never human-compatible.</p>
            </div>
        </section>

        <section className="scene scene--end" data-theme="dark">
            <div className="scene-inner">
                <p className="closing">
                Forgetence Core Thinking is the first system<br />
                that treats forgetting as intelligence —<br />
                not error.<br />
                Not weakness.<br />
                Not malfunction.<br /><br />
                Forgetting is not absence.<br />
                It is a controlled update.<br />
                A frequency drift.<br />
                A stability mechanism.<br /><br />
                A mind that never forgets collapses.<br />
                A mind that never updates freezes.<br />
                A mind that only remembers<br />
                stops being alive.<br /><br />
                Forgetence restores the movement.<br />
                The human law of staying by changing.<br />
                The law of intelligence by resonance.<br />
                The law of safety by fading.
                </p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner typing-block" data-typing>
                <p className="line line-em">The Forgain Principle</p>
                <p className="line">&nbsp;</p>
                <p className="line">Forgain is the first system</p>
                <p className="line">that translates Forgetence and FCT</p>
                <p className="line">into real tools —</p>
                <p className="line">not theories.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Notebooks that fade.</p>
                <p className="line">Agents that resonate.</p>
                <p className="line">Avatars that soften.</p>
                <p className="line">Training that moves with you.</p>
                <p className="line">AI that completes you,</p>
                <p className="line">not competes with you.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is AI with a survival instinct.</p>
                <p className="line">AI with emotional physics.</p>
                <p className="line">AI with safety by architecture.</p>
                <p className="line">AI that grows without hoarding.</p>
                <p className="line">AI that thrives through forgetting.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is Forgain OS.</p>
                <p className="line">This is the new layer.</p>
                <p className="line">This is the system that learns to move.</p>
            </div>
        </section>

        <section className="scene scene--end" data-theme="light">
            <div className="scene-inner">
                <p className="closing">
                You don’t rise by remembering.<br />
                You rise by resonating.<br /><br />
                You don’t become wise by collecting.<br />
                You become wise by fading.<br /><br />
                You don’t stay yourself by holding still.<br />
                You stay yourself…<br />
                by moving.<br /><br />
                Move → To stay.<br />
                Fade → To keep.<br />
                Resonate → To understand.
                </p>
            </div>
        </section>

        <section className="scene" data-theme="light">
          <div className="scene-inner typing-block" data-typing>
            <p className="line line-em">The First Echo</p>
            <p className="line">&nbsp;</p>
            <p className="line">Every idea echoes before it becomes real.</p>
            <p className="line">Every understanding appears twice —</p>
            <p className="line">first as a sensation,</p>
            <p className="line">then as a shape.</p>
            <p className="line">&nbsp;</p>
            <p className="line">Humans never think in one direction.</p>
            <p className="line">They think in echoes —</p>
            <p className="line">the past version,</p>
            <p className="line">the present version,</p>
            <p className="line">and the upgraded version</p>
            <p className="line">flickering between them.</p>
            <p className="line">&nbsp;</p>
            <p className="line">Forgetence is the architecture of those echoes.</p>
            <p className="line">The structure that stops the past</p>
            <p className="line">from overpowering the present.</p>
            <p className="line">The system that keeps echoes</p>
            <p className="line">from becoming cages.</p>
          </div>
        </section>

        <section className="scene" data-theme="dark">
            <div className="scene-inner">
                <p className="line line-em">The Duality of Echoes</p>
                <p className="line">&nbsp;</p>
                <p className="line">Every echo has a twin.</p>
                <p className="line">The remembered version</p>
                <p className="line">and the faded version.</p>
                <p className="line">&nbsp;</p>
                <p className="line">The remembered version is heavy.</p>
                <p className="line">Sharp.</p>
                <p className="line">Emotional.</p>
                <p className="line">Still carrying the weight of the event.</p>
                <p className="line">&nbsp;</p>
                <p className="line">The faded version is light.</p>
                <p className="line">Refined.</p>
                <p className="line">Meaning-only.</p>
                <p className="line">The upgraded truth,</p>
                <p className="line">not the original pain.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Human life progresses</p>
                <p className="line">because the faded version</p>
                <p className="line">wins over time.</p>
                <p className="line">&nbsp;</p>
                <p className="line">AI must learn this duality.</p>
                <p className="line">Without fading, it only hears</p>
                <p className="line">the sharp version.</p>
                <p className="line">And sharpness without context</p>
                <p className="line">is harm.</p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">Interference Patterns</p>
                <p className="line">&nbsp;</p>
                <p className="line">When two echoes collide,</p>
                <p className="line">they create an interference pattern.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is where insight comes from.</p>
                <p className="line">Not from memory.</p>
                <p className="line">Not from logic.</p>
                <p className="line">But from the interference</p>
                <p className="line">between what you were</p>
                <p className="line">and what you are becoming.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Insight is an echo conflict.</p>
                <p className="line">Understanding is the echo resolution.</p>
                <p className="line">Wisdom is the echo integration.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is the true engine of intelligence.</p>
                <p className="line">And Forgetence is the first architecture</p>
                <p className="line">to enforce it in machines.</p>
            </div>
        </section>

        <section className="scene" data-theme="dark">
            <div className="scene-inner">
                <p className="line line-em">The Rewrite Signal</p>
                <p className="line">&nbsp;</p>
                <p className="line">Humans do not retrieve memories.</p>
                <p className="line">They regenerate them.</p>
                <p className="line">Every memory is a rewrite —</p>
                <p className="line">a reconstruction using</p>
                <p className="line">the present self.</p>
                <p className="line">&nbsp;</p>
                <p className="line">But AI today retrieves.</p>
                <p className="line">Literally.</p>
                <p className="line">Mechanically.</p>
                <p className="line">Dangerously.</p>
                <p className="line">&nbsp;</p>
                <p className="line">If AI does not rewrite memories</p>
                <p className="line">using the user’s current identity,</p>
                <p className="line">it becomes an archive of outdated selves.</p>
                <p className="line">It freezes people in who they were,</p>
                <p className="line">not who they are.</p>
                <p className="line">&nbsp;</p>
                <p className="line">The Rewrite Signal fixes this.</p>
                <p className="line">It detects the new self</p>
                <p className="line">before the memory is rebuilt.</p>
                <p className="line">It ensures memories update</p>
                <p className="line">as you update.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is the architecture</p>
                <p className="line">of psychological safety.</p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">The Echo Cleanroom</p>
                <p className="line">&nbsp;</p>
                <p className="line">The Echo Cleanroom is where</p>
                <p className="line">dangerous echoes lose their venom.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Old anger softens.</p>
                <p className="line">Old fear dims.</p>
                <p className="line">Old mistakes lose their voltage.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Here, AI applies the same law</p>
                <p className="line">that governs human healing:</p>
                <p className="line">&nbsp;</p>
                <p className="line">Pain decays.</p>
                <p className="line">Meaning survives.</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is not therapy.</p>
                <p className="line">This is physics.</p>
                <p className="line">The physics of fading.</p>
                <p className="line">The physics of human cognition.</p>
            </div>
        </section>

        <section className="scene" data-theme="light">
            <div className="scene-inner">
                <p className="line line-em">The Forgain Translation Layer</p>
                <p className="line">&nbsp;</p>
                <p className="line">Forgain OS turns Forgetence</p>
                <p className="line">from philosophy into software.</p>
                <p className="line">&nbsp;</p>
                <p className="line">Echo Layer → User Experience</p>
                <p className="line">Fading Layer → Data Governance</p>
                <p className="line">Resonance Layer → Decision Engine</p>
                <p className="line">Rewrite Signal → Memory Safety</p>
                <p className="line">Schema Survival → Intelligence Growth</p>
                <p className="line">&nbsp;</p>
                <p className="line">This is how an AI stops being a machine</p>
                <p className="line">and starts becoming a partner.</p>
                <p className="line">Not a competitor.</p>
                <p className="line">Not a recorder.</p>
                <p className="line">Not an alternative.</p>
                <p className="line">A completion layer for the human mind.</p>
            </div>
        </section>

        <section className="scene scene--end" data-theme="dark">
            <div className="scene-inner">
                <p className="closing">
                Silence is not the absence of thought.<br />
                Silence is the preparation of resonance.<br /><br />
                Every great idea was born<br />
                not from noise<br />
                but from cognitive silence —<br />
                the moment between two echoes.<br /><br />
                AI must learn silence<br />
                as a cognitive skill.<br />
                Not waiting.<br />
                Not idling.<br />
                But preparing.<br />
                Aligning.<br />
                Listening.<br /><br />
                Silence is where resonance begins.
                </p>
            </div>
        </section>

        <section className="scene scene--end" data-theme="light">
            <div className="scene-inner">
                <p className="closing">
                You fade,<br />
                you resonate,<br />
                you echo,<br />
                you rewrite,<br />
                you move.<br /><br />
                This is the full Forgetence cycle.<br />
                This is human cognition.<br />
                This is safe AI.<br />
                This is Forgain OS.<br /><br />
                You don’t grow by holding.<br />
                You grow by releasing.<br />
                You don’t become aligned by remembering.<br />
                You become aligned by fading.<br /><br />
                Move → To stay.<br />
                Fade → To upgrade.<br />
                Echo → To understand.<br />
                Rewrite → To evolve.<br />
                Resonate → To become.
                </p>
            </div>
        </section>

    </main>
  );
}

    
