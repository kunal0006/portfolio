// components/ui/ProjectCard.tsx
// Featured project card with image, outcome metric, tech badges, links

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { TechBadge } from '@/components/ui/TechBadge';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const {
    name,
    tagline,
    outcome,
    description,
    tech,
    liveUrl,
    githubUrl,
    image,
    slug,
  } = project;

  return (
    <article className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Image area */}
      <div
        style={{
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          background: image
            ? 'var(--bg-elevated)'
            : 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.03) 100%)',
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            style={{
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            className="project-card-img"
          />
        ) : (
          /* Gradient placeholder */
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-instrument-serif), Georgia, serif',
                fontSize: '24px',
                color: 'rgba(59,130,246,0.4)',
                letterSpacing: '0.02em',
              }}
            >
              {name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
        <h3 className="heading-sm" style={{ color: 'var(--text-primary)' }}>
          {name}
        </h3>
        <p
          className="body-md"
          style={{ color: 'var(--text-secondary)', marginTop: '4px' }}
        >
          {tagline}
        </p>

        {/* Outcome metric */}
        <p
          className="label"
          style={{ color: 'var(--accent)', marginTop: '12px' }}
        >
          {outcome}
        </p>

        {/* Description */}
        <p
          className="body-md"
          style={{ color: 'var(--text-muted)', marginTop: '12px', lineHeight: 1.6 }}
        >
          {description}
        </p>

        {/* Tech badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '16px',
          }}
        >
          {tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {/* Links row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid var(--bg-border)',
          }}
        >
          {slug && (
            <Link
              href={`/work/${slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--accent)',
                transition: 'gap 0.2s ease',
              }}
            >
              Case Study
              <ArrowRight size={14} />
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} live site`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '14px',
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
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} GitHub repository`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '14px',
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
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Hover image zoom effect via global style */}
      <style>{`
        article.card:hover .project-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </article>
  );
}
