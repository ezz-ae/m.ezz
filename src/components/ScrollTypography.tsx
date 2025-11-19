
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
        initial={{ opacity: 0.8, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1] } },
  };

  const emphasisClasses = {
    base: '', // Will inherit color from parent
    resonance: 'font-medium',
    whisper: 'italic',
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
  glow = true,
  as: Component = 'h2',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, delay: 0.1, ease: [0.17, 0.55, 0.55, 1] } },
  };
  
  const emphasisClasses = {
    base: '', // Will inherit color from parent
    resonance: 'font-medium tracking-tight',
  }

  const glowStyle = glow ? { textShadow: '0 0 40px hsla(var(--foreground), 0.25), 0 0 80px hsla(var(--foreground), 0.1)' } : {};

  return (
    <Component
      ref={ref}
      className={cn('font-headline !mb-4', emphasisClasses[emphasisLevel], className)}
    >
      <motion.span 
        className="inline-block"
        style={glowStyle}
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
            <div className={cn("my-12 border-l-4 border-neutral-300 pl-6 py-4", className)}>
                {label && (
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">{label}</p>
                )}
                <p className="text-lg md:text-xl font-headline tracking-tight leading-relaxed">{children}</p>
            </div>
        </Section>
    )
};
