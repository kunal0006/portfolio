// components/sections/Experience.tsx
// Vertical timeline layout

import { FadeUp } from '@/components/motion/FadeUp';
import { experience } from '@/data/portfolio';

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-divider"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <FadeUp>
          <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
            Experience
          </p>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2
            id="experience-heading"
            className="display-md"
            style={{ color: 'var(--text-primary)', marginBottom: '48px' }}
          >
            Where I&apos;ve Worked
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '680px' }}>
          {experience.map((item, i) => (
            <FadeUp key={`${item.company}-${i}`} delay={i * 0.08}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '20px 1fr',
                  gap: '0 20px',
                  marginBottom: i < experience.length - 1 ? '0' : '0',
                }}
              >
                {/* Timeline left */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="timeline-dot" style={{ marginTop: '5px' }} />
                  {i < experience.length - 1 && (
                    <div
                      className="timeline-line"
                      style={{ flex: 1, minHeight: '40px', marginTop: '8px', marginBottom: '0' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    paddingBottom: i < experience.length - 1 ? '40px' : '0',
                  }}
                >
                  <p
                    className="label"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '11px',
                      marginBottom: '4px',
                    }}
                  >
                    {item.period}
                  </p>
                  <h3
                    className="heading-sm"
                    style={{ color: 'var(--text-primary)', marginBottom: '2px' }}
                  >
                    {item.company}
                  </h3>
                  <p
                    className="body-md"
                    style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}
                  >
                    {item.role}
                  </p>
                  <p className="body-md" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
