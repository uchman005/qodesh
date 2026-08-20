type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MasterPlanningIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M4 26 L4 8 L14 4 L28 8 L28 24 L18 28 Z" />
      <path d="M14 4 L14 24 M14 24 L4 26 M14 24 L28 24" />
      <path d="M18 12 L23 12 M18 16 L23 16" />
    </svg>
  );
}

export function StructuralEngineeringIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M4 26 H28" />
      <path d="M6 26 V12 L16 5 L26 12 V26" />
      <path d="M6 12 H26 M11 12 V26 M16 12 V26 M21 12 V26" />
    </svg>
  );
}

export function CivilEnvironmentalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M16 4 C21 12 24 16.5 24 20.5 A8 8 0 0 1 8 20.5 C8 16.5 11 12 16 4 Z" />
      <path d="M11 21 C13 23 19 23 21 21" />
    </svg>
  );
}

export function ConstructionManagementIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M8 28 V14 L16 8 L24 14 V28" />
      <rect x="12" y="18" width="8" height="10" />
      <path d="M4 28 H28" />
      <path d="M12 18 V13 H20 V18" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M6 26 C6 14 14 6 26 6 C26 18 18 26 6 26 Z" />
      <path d="M6 26 L18 14" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <circle cx="16" cy="16" r="12" />
      <path d="M20 12 L14 18 M20 12 L15 14 M20 12 L18 17" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      <path d="M16 4 L26 8 V15 C26 22 21 26.5 16 28 C11 26.5 6 22 6 15 V8 Z" />
      <path d="M11 16 L14.5 19.5 L21 12" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="currentColor" />
      <circle cx="10.5" cy="11" r="1.9" fill="var(--color-paper)" />
      <path
        d="M8.7 14.5 H12.3 V24 H8.7 Z M14.8 14.5 H18.2 V16.1 C18.9 14.9 20.2 14.1 21.8 14.1 C24.6 14.1 25.9 15.9 25.9 18.9 V24 H22.3 V19.6 C22.3 18.1 21.7 17.1 20.4 17.1 C19.3 17.1 18.6 17.9 18.4 18.6 C18.3 18.9 18.3 19.3 18.3 19.7 V24 H14.8 Z"
        fill="var(--color-paper)"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M4 12 H20 M14 6 L20 12 L14 18" />
    </svg>
  );
}
