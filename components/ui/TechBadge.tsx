// components/ui/TechBadge.tsx
// Minimal tech stack badge — JetBrains Mono, no color coding

interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return <span className="tech-badge">{label}</span>;
}
