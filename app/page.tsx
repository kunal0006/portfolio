'use client';

// app/page.tsx — Homepage

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Testimonial } from '@/components/sections/Testimonial';
import { Contact } from '@/components/sections/Contact';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/ui/CommandPalette';

export default function HomePage() {
  const [commandOpen, setCommandOpen] = useState(false);

  // Global Cmd+K / Ctrl+K handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleContactClick = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Nav
        onCommandPaletteOpen={() => setCommandOpen(true)}
      />

      <Hero onContactClick={handleContactClick} />

      <Projects />

      <About />

      <Experience />

      <Testimonial />

      <Contact />

      <Footer />

      <AnimatePresence>
        {commandOpen && (
          <CommandPalette onClose={() => setCommandOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
