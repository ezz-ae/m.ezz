
"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, ElementType } from 'react';
import { cn } from '@/lib/utils';

type BaseScrollProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

// Generic Section with a consistent animation
export const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        {children}
    </motion.section>
);


type ScrollParagraphProps = BaseScrollProps & {
  emphasisLevel?: 'base' | 'resonance' | 'whisper';
};

export const ScrollParagraph: React.FC<ScrollParagraphProps> = ({
  children,
  emphasisLevel = 'base',
  className,
  as: Component = 'p',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const emphasisClasses = {
    base: 'text-neutral-300',
    resonance: 'text-neutral-100 font-medium tracking-wide',
    whisper: 'text-neutral-500 italic',
  };

  return (
    <Component
      ref={ref}
      className={cn(emphasisClasses[emphasisLevel], className)}
    >
        <motion.span
            className="inline-block"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.span>
    </Component>
  );
};

type ScrollHeadingProps = BaseScrollProps & {
  emphasisLevel?: 'base' | 'resonance';
  glow?: boolean;
};

export const ScrollHeading: React.FC<ScrollHeadingProps> = ({
  children,
  className,
  emphasisLevel = 'base',
  glow = false,
  as: Component = 'h2',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const emphasisClasses = {
    base: 'text-neutral-100',
    resonance: 'text-neutral-50 font-medium tracking-tight',
  }

  return (
    <Component
      ref={ref}
      className={cn('!mb-4', emphasisClasses[emphasisLevel], className, glow && 'text-shadow-[0_0_12px_rgba(255,255,255,0.5)]')}
    >
      <motion.span 
        className="inline-block"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.span>
    </Component>
  );
};


type ScrollCalloutProps = BaseScrollProps & {
    label?: string;
};

export const ScrollCallout: React.FC<ScrollCalloutProps> = ({
    children,
    label,
    className,
}) => {
    return (
        <Section>
            <div className={cn("my-8 border-l-2 border-neutral-700 pl-6 py-4 bg-white/5 rounded-r-lg", className)}>
                {label && (
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">{label}</p>
                )}
                <p className="text-neutral-200 leading-relaxed">{children}</p>
            </div>
        </Section>
    )
};
