'use client';

// components/sections/Contact.tsx
// Minimal contact section — no form, email copy with toast, icon links

import { useState, useCallback } from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { FadeUp } from '@/components/motion/FadeUp';
import { personal } from '@/data/portfolio';
import { copyToClipboard } from '@/lib/utils';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await copyToClipboard(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${personal.email}`;
    }
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-divider"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        {/* Label */}
        <FadeUp>
          <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
            Contact
          </p>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2
            id="contact-heading"
            className="display-md"
            style={{ color: 'var(--text-primary)', marginBottom: '16px' }}
          >
            Let&apos;s work together.
          </h2>
        </FadeUp>

        {/* Invitation */}
        <FadeUp delay={0.1}>
          <p
            className="body-lg"
            style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}
          >
            I&apos;m currently open to new opportunities. Whether you have a project, an idea,
            or just want to connect — my inbox is open.
          </p>
        </FadeUp>

        {/* Email — large, copyable */}
        <FadeUp delay={0.15}>
          <button
            id="copy-email-btn"
            onClick={handleCopyEmail}
            aria-label={`Copy email address: ${personal.email}`}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(18px, 3vw, 28px)',
              fontWeight: 500,
              color: copied ? 'var(--accent)' : 'var(--text-primary)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              transition: 'color 0.2s ease',
              display: 'block',
              margin: '0 auto 8px',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) =>
              !copied &&
              ((e.target as HTMLElement).style.color = 'var(--accent)')
            }
            onMouseLeave={(e) =>
              !copied &&
              ((e.target as HTMLElement).style.color = 'var(--text-primary)')
            }
          >
            {copied ? '✓ Copied!' : personal.email}
          </button>
          <p
            className="code"
            style={{ color: 'var(--text-muted)', fontSize: '12px' }}
          >
            click to copy
          </p>
        </FadeUp>

        {/* Icon links */}
        <FadeUp delay={0.2}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '40px',
            }}
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--bg-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-primary)';
                el.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'var(--bg-border)';
              }}
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--bg-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-primary)';
                el.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'var(--bg-border)';
              }}
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--bg-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-primary)';
                el.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'var(--bg-border)';
              }}
            >
              <Mail size={20} />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Copied toast */}
      {copied && (
        <div className="toast" role="status" aria-live="polite">
          ✓ Email copied to clipboard
        </div>
      )}
    </section>
  );
}
