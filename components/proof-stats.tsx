import Link from 'next/link';
import { proofStats } from '@/lib/public-proof';
import { Icon } from './icon';

export function ProofStats() {
  return (
    <div className="proof-stat-grid">
      {proofStats.map((stat) => (
        <div className="proof-stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <small>{stat.detail}</small>
          {stat.href && (
            <Link className="proof-stat-link" href={stat.href}>
              {stat.linkLabel || 'Learn more'} <Icon name="arrow" size={14} />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
