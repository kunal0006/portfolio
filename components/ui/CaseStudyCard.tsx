// components/ui/CaseStudyCard.tsx
// Smaller secondary project card — no image, just name/tagline/tech/links

import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { TechBadge } from '@/components/ui/TechBadge';
import type { SecondaryProject } from '@/lib/types';

interface CaseStudyCardProps {
  project: SecondaryProject;
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const { name, tagline, tech, liveUrl, githubUrl } = project;

  return (
    <article
      className="card"
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h3 className="heading-sm" style={{ color: 'var(--text-primary)', fontSize: '17px' }}>
            {name}
          </h3>
          <p
            className="body-md"
            style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '14px' }}
          >
            {tagline}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0, paddingTop: '2px' }}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} live site`}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              <ExternalLink size={15} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} GitHub repository`}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              <GithubIcon size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
        {tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </article>
  );
}
