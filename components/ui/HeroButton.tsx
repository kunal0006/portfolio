'use client';

// components/ui/HeroButton.tsx
// Premium CTA buttons for the hero section
// Primary: animated shimmer border + gradient fill
// Secondary: ghost with animated underline

import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// ── Primary Button — Shimmer + Gradient ──────────────────────
interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  className?: string;
}

export function PrimaryButton({ children, href, onClick, id, className }: PrimaryButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      ref={btnRef}
      id={id}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('hero-btn-primary', className)}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      {/* Shimmer spotlight that follows cursor */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: isHovered
            ? `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 60%)`
            : 'transparent',
          transition: 'background 0.1s ease',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
    </a>
  );
}

// ── Secondary Button — Ghost with animated underline ─────────
interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
}

export function SecondaryButton({ children, href, onClick, id }: SecondaryButtonProps) {
  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      className="hero-btn-secondary"
    >
      {children}
    </a>
  );
}
