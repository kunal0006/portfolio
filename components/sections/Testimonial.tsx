// components/sections/Testimonial.tsx
// Single testimonial block — renders null if no testimonials

import { FadeUp } from '@/components/motion/FadeUp';
import { testimonials } from '@/data/portfolio';

export function Testimonial() {
  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[0];

  return (
    <section
      id="testimonial"
      aria-label="Testimonial"
      className="section-divider"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <FadeUp>
          {/* Quote mark */}
          <div
            style={{
              fontFamily: 'var(--font-instrument-serif), Georgia, serif',
              fontSize: '72px',
              lineHeight: 1,
              color: 'var(--accent)',
              opacity: 0.4,
              marginBottom: '-16px',
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-instrument-serif), Georgia, serif',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              lineHeight: 1.5,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              marginBottom: '32px',
            }}
          >
            {t.quote}
          </blockquote>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <p
              className="heading-sm"
              style={{ color: 'var(--text-primary)', fontSize: '16px' }}
            >
              {t.name}
            </p>
            <p className="body-md" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              {t.title}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
