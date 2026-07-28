'use client';

// components/sections/Hero.tsx
// Full-viewport hero with 3-layer background and staggered entrance

import { motion, useReducedMotion } from 'framer-motion';
import { StarsBackground } from '@/components/ui/stars';
import { useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { PrimaryButton, SecondaryButton } from '@/components/ui/HeroButton';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = personal.hero.headline.split(' ');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Proximity-based opacity: words near the hovered one dim less than far ones
  const getWordOpacity = useCallback(
    (i: number): number => {
      if (prefersReducedMotion || hoveredIndex === null) return 1;
      const dist = Math.abs(i - hoveredIndex);
      if (dist === 0) return 1;
      if (dist === 1) return 0.5;
      if (dist === 2) return 0.35;
      return 0.25;
    },
    [hoveredIndex, prefersReducedMotion]
  );

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        },
      };

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stars background — matches page bg (#0A0A0A) at edges */}
      <StarsBackground
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
        starColor="rgba(255,255,255,0.85)"
        speed={60}
        factor={0.04}
        className="!bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0A0A0A_100%)]"
      />

      {/* Bottom fade — hero bleeds seamlessly into projects section */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Subtle blue accent glow on top of stars */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          top: '20%',
          left: '30%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '760px' }}
        >
          {/* Availability badge */}
          <motion.div variants={item} style={{ marginBottom: '32px' }}>
            <AvailabilityBadge status={personal.availability} />
          </motion.div>

          {/* Name */}
          <motion.p
            variants={item}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            {personal.name}
          </motion.p>

          {/* Headline — word-by-word hover pop */}
          <motion.h1
            id="hero-headline"
            className="display-xl"
            variants={item}
            style={{
              color: 'var(--text-primary)',
              marginBottom: '20px',
              cursor: 'default',
              lineHeight: 1.12,
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                style={{
                  display: 'inline-block',
                  marginRight: '0.22em',
                  whiteSpace: 'nowrap',
                  transformOrigin: 'bottom center',
                  willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
                  opacity: getWordOpacity(i),
                  y: hoveredIndex === i ? -8 : 0,
                  scale: hoveredIndex === i ? 1.1 : 1,
                  color: hoveredIndex === i ? '#fff' : 'var(--text-primary)',
                  textShadow:
                    hoveredIndex === i
                      ? '0 0 24px rgba(59,130,246,0.55), 0 0 48px rgba(59,130,246,0.2)'
                      : '0 0 0px rgba(59,130,246,0)',
                }}
                transition={{
                  // Opacity: slower crossfade for smooth dim/brighten
                  opacity: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                  // Position + scale: spring for natural pop
                  y: { type: 'spring', stiffness: 380, damping: 28, mass: 0.7 },
                  scale: { type: 'spring', stiffness: 380, damping: 28, mass: 0.7 },
                  // Color + glow: tween so they blend rather than snap
                  color: { duration: 0.2, ease: 'easeOut' },
                  textShadow: { duration: 0.3, ease: 'easeOut' },
                }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="body-lg"
            variants={item}
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginBottom: '48px',
            }}
          >
            {personal.hero.subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <PrimaryButton
              id="hero-cta-work"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See my work
              <ArrowRight size={16} />
            </PrimaryButton>

            <SecondaryButton
              id="hero-cta-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
            >
              Get in touch
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 4,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background:
              'linear-gradient(to bottom, transparent, var(--bg-border), transparent)',
          }}
        />
      </div>
    </section>
  );
}
