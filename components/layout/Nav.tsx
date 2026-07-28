'use client';

// components/layout/Nav.tsx
// Fixed nav that appears after user scrolls past hero

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { CommandPalette } from '@/components/ui/CommandPalette';

interface NavProps {
  onCommandPaletteOpen: () => void;
}

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Nav({ onCommandPaletteOpen }: NavProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Show nav after scrolling past hero (100vh)
  useEffect(() => {
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.9 : 600;

    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 90,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(10,10,10,0.85)',
              borderBottom: '1px solid var(--bg-border)',
            }}
            role="banner"
          >
            <nav
              aria-label="Main navigation"
              style={{
                maxWidth: '1152px',
                margin: '0 auto',
                padding: '0 24px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Name / Logo */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                }}
              >
                {personal.name}
              </a>

              {/* Desktop Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                }}
                className="hidden md:flex"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--text-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
                    }
                  >
                    {link.label}
                  </a>
                ))}

                {/* Resume */}
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    padding: '5px 12px',
                    border: '1px solid rgba(59,130,246,0.3)',
                    borderRadius: '6px',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'rgba(59,130,246,0.7)';
                    (e.target as HTMLElement).style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)';
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  }}
                >
                  Resume
                </a>

                {/* ⌘K badge */}
                <button
                  id="cmd-k-badge"
                  onClick={onCommandPaletteOpen}
                  aria-label="Open command palette (Cmd+K)"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    padding: '3px 8px',
                    border: '1px solid var(--bg-border)',
                    borderRadius: '4px',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-muted)';
                    (e.target as HTMLElement).style.borderColor = 'var(--bg-border)';
                  }}
                >
                  ⌘K
                </button>
              </div>

              {/* Mobile hamburger */}
              <button
                className="flex md:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                style={{
                  color: 'var(--text-secondary)',
                  padding: '8px',
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '24px',
              }}
            >
              {/* Close */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  style={{ color: 'var(--text-secondary)', padding: '8px' }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '40px',
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    style={{
                      fontFamily: 'var(--font-instrument-serif), Georgia, serif',
                      fontSize: '36px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '14px',
                    color: 'var(--accent)',
                  }}
                >
                  ↓ Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
