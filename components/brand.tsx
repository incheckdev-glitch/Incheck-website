import Link from 'next/link';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="InCheck 360 home">
      <span className="brand-mark" aria-hidden="true"><span>✓</span></span>
      <span className="brand-type">
        <strong>InCheck <em>360</em></strong>
        {!compact && <small>CHECK. IDENTIFY. ACT. VERIFY.</small>}
      </span>
    </Link>
  );
}
