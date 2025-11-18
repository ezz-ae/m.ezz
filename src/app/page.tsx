
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
            <div className="scene-inner typing-block" data-typing="">
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
    </main>
  );
}
