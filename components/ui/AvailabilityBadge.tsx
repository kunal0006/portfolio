// components/ui/AvailabilityBadge.tsx
// Pulsing status badge shown in the hero

interface AvailabilityBadgeProps {
  status: string;
}

export function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        border: '1px solid rgba(59,130,246,0.3)',
        borderRadius: '999px',
        background: 'rgba(59,130,246,0.08)',
      }}
    >
      {/* Pulsing dot */}
      <span
        className="pulse-dot"
        style={{
          display: 'block',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#22c55e',
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <span
        className="code"
        style={{
          color: 'var(--text-secondary)',
          fontSize: '12px',
        }}
      >
        {status}
      </span>
    </div>
  );
}
