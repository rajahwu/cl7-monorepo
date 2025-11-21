import { ChevronRight } from 'lucide-react';
import type { Edition } from './editions';

interface EditionCardProps {
  edition: Edition;
  onClick: () => void;
}

export function EditionCard({ edition, onClick }: EditionCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: edition.palette.card,
        border: `2px solid ${edition.palette.primary}`,
        borderRadius: '12px',
        padding: '32px',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{edition.icon}</div>
      <h2 style={{ fontSize: '24px', margin: '0 0 8px', color: edition.palette.primary }}>
        {edition.name}
      </h2>
      <p style={{ color: edition.palette.muted, marginBottom: '16px', lineHeight: 1.5 }}>
        {edition.tagline}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: edition.palette.primary, fontWeight: 600 }}>
        Explore <ChevronRight size={18} />
      </div>
    </button>
  );
}
