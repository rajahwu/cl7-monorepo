import { NavLink } from 'react-router-dom'

interface NavigationProps {
  isOpen: boolean
  toggle: () => void
}

export function Navigation({ isOpen, toggle }: NavigationProps) {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'block',
    padding: '8px 16px',
    color: isActive ? '#3B82F6' : '#333',
    fontWeight: isActive ? 600 : 400,
    textDecoration: 'none',
    borderLeft: isActive ? '3px solid #3B82F6' : '3px solid transparent',
    fontSize: '14px',
  })

  const sectionStyle = {
    marginBottom: '24px',
  }

  const headingStyle = {
    fontSize: '11px',
    fontWeight: 600,
    color: '#6B7280',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '8px',
    paddingLeft: '16px',
  }

  return (
    <nav
      style={{
        width: '260px',
        padding: '20px 0',
        backgroundColor: '#F9FAFB',
        height: '100vh',
        overflowY: 'auto',
        position: 'fixed',
        left: isOpen ? 0 : '-260px',
        top: 0,
        transition: 'left 0.3s',
        zIndex: 999,
        borderRight: '1px solid #E5E7EB',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          marginBottom: '24px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#111827' }}>
          CL7 Style Guide
        </h2>
        <button
          onClick={toggle}
          style={{
            padding: '4px 8px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#6B7280',
          }}
        >
          ✕
        </button>
      </div>

      {/* Part I: The Style System */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>The Style System</h3>
        <NavLink to="/guide/intro" style={linkStyle}>
          Introduction & Scope
        </NavLink>
        <NavLink to="/guide/philosophy" style={linkStyle}>
          Branding Philosophy
        </NavLink>
        <NavLink to="/guide/matrix" style={linkStyle}>
          Style Set Matrix
        </NavLink>
      </div>

      {/* Part II: The Core Guide */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>The Core Guide</h3>
        <NavLink to="/guide/writing" style={linkStyle}>
          Writing Style
        </NavLink>
        <NavLink to="/guide/grammar" style={linkStyle}>
          Grammar & Mechanics
        </NavLink>
        <NavLink to="/guide/layout" style={linkStyle}>
          Document Layout
        </NavLink>
      </div>

      {/* Part III: Implementation */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Implementation</h3>
        <NavLink to="/guide/templates" style={linkStyle}>
          Templates & Files
        </NavLink>
        <NavLink to="/guide/implementation" style={linkStyle}>
          Implementation Guide
        </NavLink>
        <NavLink to="/guide/governance" style={linkStyle}>
          Governance
        </NavLink>
      </div>

      {/* Part IV: Technical Reference */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Style Sets</h3>
        <NavLink to="/sets/clearline7" style={linkStyle}>
          Clearline7
        </NavLink>
        <NavLink to="/sets/federal" style={linkStyle}>
          Federal Flow
        </NavLink>
        <NavLink to="/sets/clerkroom" style={linkStyle}>
          ClerkRoom Standard
        </NavLink>
        <NavLink to="/sets/clerical-pro" style={linkStyle}>
          Clerical Office Pro
        </NavLink>
        <NavLink to="/sets/techdocs" style={linkStyle}>
          TechDocs & Code
        </NavLink>
        <NavLink to="/sets/wiki" style={linkStyle}>
          Wiki & Guidelines
        </NavLink>
        <NavLink to="/sets/blog-posts" style={linkStyle}>
          Blog, Posts & Comments
        </NavLink>
      </div>

      {/* Components (Specimens) */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Components</h3>
        <NavLink to="/specimen" style={linkStyle}>
          Specimen Sheet
        </NavLink>
        <NavLink to="/components/heading" style={linkStyle}>
          Heading
        </NavLink>
        <NavLink to="/components/paragraph" style={linkStyle}>
          Paragraph
        </NavLink>
        <NavLink to="/components/blockquote" style={linkStyle}>
          Blockquote
        </NavLink>
        <NavLink to="/components/code" style={linkStyle}>
          Code
        </NavLink>
        <NavLink to="/components/list" style={linkStyle}>
          List
        </NavLink>
        <NavLink to="/components/card" style={linkStyle}>
          Card
        </NavLink>
      </div>

      {/* UI Components */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>UI Components</h3>
        <NavLink to="/components/button" style={linkStyle}>
          Button
        </NavLink>
        <NavLink to="/components/header" style={linkStyle}>
          Header
        </NavLink>
        <NavLink to="/components/footer" style={linkStyle}>
          Footer
        </NavLink>
        <NavLink to="/components/navigation" style={linkStyle}>
          Navigation
        </NavLink>
      </div>
    </nav>
  )
}
