// components/layout/Footer.tsx

import { personal } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--bg-border)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Name */}
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-muted)',
          }}
        >
          {personal.name}
        </span>

        {/* Nav */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '14px',
            color: 'var(--text-muted)',
          }}
        >
          {['Work', 'About', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const id = label.toLowerCase() === 'work' ? 'projects' : label.toLowerCase();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ transition: 'color 0.2s ease' }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--text-muted)')
            }
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--text-muted)')
            }
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
