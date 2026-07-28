// app/work/[slug]/page.tsx — Case Study pages

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { caseStudies } from '@/data/portfolio';
import { TechBadge } from '@/components/ui/TechBadge';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.projectName} — Case Study`,
    description: cs.outcomeHeadline,
  };
}

const sectionStyle = {
  marginBottom: '48px',
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: 'var(--text-muted)',
  marginBottom: '12px',
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  // Find prev/next
  const currentIndex = caseStudies.indexOf(cs);
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '48px 24px 96px',
        }}
      >
        {/* Back link */}
        <Link
          href="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-muted)',
            marginBottom: '48px',
            transition: 'color 0.2s ease',
          }}
        >
          <ArrowLeft size={16} />
          All Work
        </Link>

        {/* Project name */}
        <h1
          className="display-lg"
          style={{ color: 'var(--text-primary)', marginBottom: '16px' }}
        >
          {cs.projectName}
        </h1>

        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <span
            className="code"
            style={{ color: 'var(--text-muted)', fontSize: '13px' }}
          >
            {cs.role}
          </span>
          <span style={{ color: 'var(--bg-border)' }}>·</span>
          <span
            className="code"
            style={{ color: 'var(--text-muted)', fontSize: '13px' }}
          >
            {cs.duration}
          </span>
          <span style={{ color: 'var(--bg-border)' }}>·</span>
          <span
            className="code"
            style={{ color: 'var(--text-muted)', fontSize: '13px' }}
          >
            {cs.year}
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {cs.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </div>

        {/* Outcome headline */}
        <p
          className="display-md"
          style={{
            fontStyle: 'italic',
            color: 'var(--accent)',
            marginBottom: '64px',
            maxWidth: '780px',
          }}
        >
          {cs.outcomeHeadline}
        </p>

        {/* Two-column layout */}
        <div className="case-study-grid">
          {/* Left: Content */}
          <div>
            <div style={sectionStyle}>
              <p style={sectionLabelStyle}>The Problem</p>
              <p
                className="body-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cs.problem}
              </p>
            </div>

            <div style={sectionStyle}>
              <p style={sectionLabelStyle}>The Approach</p>
              <p
                className="body-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cs.approach}
              </p>
            </div>

            <div style={sectionStyle}>
              <p style={sectionLabelStyle}>The Execution</p>
              <p
                className="body-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cs.execution}
              </p>
            </div>

            <div style={sectionStyle}>
              <p style={sectionLabelStyle}>Results</p>
              <p
                className="body-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cs.results}
              </p>
            </div>

            <div style={sectionStyle}>
              <p style={sectionLabelStyle}>Looking Back</p>
              <p
                className="body-lg"
                style={{
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                }}
              >
                {cs.retrospective}
              </p>
            </div>
          </div>

          {/* Right: Sticky sidebar */}
          <div>
            <div
              className="case-study-sidebar"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--bg-border)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <p style={sectionLabelStyle}>Quick Stats</p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                {[
                  { label: 'Role', value: cs.role },
                  { label: 'Duration', value: cs.duration },
                  { label: 'Year', value: cs.year },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p
                      className="code"
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '11px',
                        marginBottom: '2px',
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="body-md"
                      style={{ color: 'var(--text-primary)', fontSize: '14px' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <p style={{ ...sectionLabelStyle, marginBottom: '8px' }}>Stack</p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '24px',
                }}
              >
                {cs.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>

              {/* Links */}
              {cs.liveUrl && (
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}
                >
                  <ExternalLink size={14} />
                  View Live
                </a>
              )}
              {cs.githubUrl && (
                <a
                  href={cs.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    border: '1px solid var(--bg-border)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                    width: '100%',
                    textAlign: 'center' as const,
                  }}
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image gallery */}
        {cs.images && cs.images.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
              marginTop: '64px',
            }}
          >
            {cs.images.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img}
                alt={`${cs.projectName} screenshot ${i + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '1px solid var(--bg-border)',
                }}
                loading="lazy"
              />
            ))}
          </div>
        )}

        {/* Micro-CTA */}
        <div
          style={{
            marginTop: '80px',
            padding: '40px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border)',
            borderRadius: '14px',
            textAlign: 'center',
          }}
        >
          <p
            className="body-lg"
            style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}
          >
            Working on something similar?
          </p>
          <a
            href="/#contact"
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--accent)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Let&apos;s talk →
          </a>
        </div>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '48px',
              gap: '16px',
            }}
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                }}
              >
                ← {prev.projectName}
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/work/${next.slug}`}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                }}
              >
                {next.projectName} →
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Grid styles */}
      <style>{`
        .case-study-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        .case-study-sidebar {
          position: static;
        }
        @media (min-width: 900px) {
          .case-study-grid {
            grid-template-columns: 65fr 35fr;
          }
          .case-study-sidebar {
            position: sticky;
            top: 80px;
          }
        }
      `}</style>
    </div>
  );
}
