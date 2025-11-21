import { Link } from 'react-router-dom';
import { editions } from '../editions/editions';
import { EditionCard } from '../editions/EditionCard';

export function LandingPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0a0a0a', minHeight: '100vh', width: '100%' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '18px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#2F5597' }} />
            Clearline 7
          </div>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#editions" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>Editions</a>
            <a href="#features" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>Features</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Hero */}
        <section style={{ padding: '64px 0 40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', lineHeight: 1.1, margin: '0 0 14px', color: '#0a0a0a' }}>
            One System. Four Distinct Editions.
          </h1>
          <p style={{ color: '#555', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Unified style framework with tailored palettes and typography for government, corporate, technical, and collaborative teams.
          </p>
        </section>

        {/* Editions Grid */}
        <section id="editions" style={{ padding: '50px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {Object.values(editions).map((ed) => (
              <Link to={`/${ed.slug}`} key={ed.slug} style={{ textDecoration: 'none' }}>
                <EditionCard edition={ed} onClick={() => {}} />
              </Link>
            ))}
          </div>
        </section>

        {/* Unified features */}
        <section id="features" style={{ padding: '50px 0' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center', color: '#0a0a0a' }}>
            Unified, Yet Distinct
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>Shared Architecture</h3>
              <p style={{ color: '#555', margin: 0 }}>All editions use the same style system and template structure for consistency across your org.</p>
            </div>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>Tailored Palettes</h3>
              <p style={{ color: '#555', margin: 0 }}>Each edition features a distinct color palette and typography designed for its audience.</p>
            </div>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>One-Click Switching</h3>
              <p style={{ color: '#555', margin: 0 }}>Quick Style Sets let teams adopt the right edition for their workflow instantly.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '30px 0', marginTop: '60px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center', color: '#555' }}>
          <p>© 2025 Clearline 7. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
