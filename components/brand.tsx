import Link from 'next/link';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="InCheck 360 home">
      <img
        className="brand-logo"
        src="/brand/incheck360-logo.webp"
        alt="InCheck 360"
        width="566"
        height="153"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
