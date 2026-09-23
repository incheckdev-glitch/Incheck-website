import Link from 'next/link';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand official-brand ${compact ? 'compact' : ''}`} aria-label="InCheck 360 home">
      <img
        src="/brand/incheck360-logo.png"
        alt="InCheck 360"
        width="610"
        height="200"
        className="official-brand-logo"
      />
    </Link>
  );
}
