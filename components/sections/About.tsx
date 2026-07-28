// components/sections/About.tsx
// Two-column about section with photo and text

import Image from 'next/image';
import { FadeUp } from '@/components/motion/FadeUp';
import { personal } from '@/data/portfolio';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-divider"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div className="about-grid">
          {/* Photo */}
          <FadeUp className="about-photo-col">
            <div
              style={{
                aspectRatio: '4/5',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--bg-border)',
                boxShadow: '4px 4px 0 var(--accent)',
                position: 'relative',
                background: 'var(--bg-elevated)',
              }}
            >
              <Image
                src={personal.photo}
                alt={`${personal.name} — ${personal.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
            </div>
          </FadeUp>

          {/* Text */}
          <div className="about-text-col">
            <FadeUp delay={0.05}>
              <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                About
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                id="about-heading"
                className="display-md"
                style={{ color: 'var(--text-primary)', marginBottom: '24px' }}
              >
                The person behind the code.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {personal.about.p1}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                {personal.about.p2}
              </p>
            </FadeUp>

            {/* Stack */}
            <FadeUp delay={0.25}>
              <div style={{ marginBottom: '32px' }}>
                <p
                  className="label"
                  style={{ color: 'var(--text-muted)', marginBottom: '12px', fontSize: '11px' }}
                >
                  Current stack
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {personal.about.stack.map((item) => (
                    <li
                      key={item}
                      className="code"
                      style={{ color: 'var(--text-secondary)', fontSize: '13px' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Resume link */}
            <FadeUp delay={0.3}>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--accent)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = '0.7')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = '1')
                }
              >
                ↓ Download Resume
              </a>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        .about-grid {
          display: grid;
          gap: 48px;
          grid-template-columns: 1fr;
        }
        .about-photo-col {
          max-width: 400px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 2fr 3fr;
            align-items: start;
          }
          .about-photo-col {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
