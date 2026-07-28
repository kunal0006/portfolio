// app/not-found.tsx — Custom 404 page

import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
          backgroundSize: '22px 22px',
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-instrument-serif), Georgia, serif',
            fontSize: 'clamp(120px, 20vw, 200px)',
            lineHeight: 0.9,
            color: 'var(--bg-elevated)',
            fontStyle: 'italic',
            transform: 'rotate(-3deg)',
            userSelect: 'none',
            marginBottom: '0',
            WebkitTextStroke: '1px rgba(255,255,255,0.06)',
          }}
        >
          404
        </p>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginTop: '24px',
            marginBottom: '32px',
            maxWidth: '400px',
          }}
        >
          This page doesn&apos;t exist. The work does, though.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border)',
            borderRadius: '8px',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
        >
          ← Back to work
        </Link>
      </div>
    </div>
  );
}
