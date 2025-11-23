import { NavLink } from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Navigation({ isOpen, toggle }: NavigationProps) {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'block',
    padding: '8px 16px',
    color: isActive ? '#0066cc' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    borderLeft: isActive ? '3px solid #0066cc' : '3px solid transparent',
  });

  return (
    <nav style={{
      width: '250px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      height: '100vh',
      overflowY: 'auto',
      position: 'fixed',
      left: isOpen ? 0 : '-250px',
      top: 0,
      transition: 'left 0.3s',
      zIndex: 999,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Style Guide</h2>
        <button
          onClick={toggle}
          style={{
            display: 'block',
            padding: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          X
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Overview</h3>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/specimen" style={linkStyle}>Specimen Sheet</NavLink>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Document Components</h3>
        <NavLink to="/components/blockquote" style={linkStyle}>Blockquote</NavLink>
        <NavLink to="/components/heading" style={linkStyle}>Heading</NavLink>
        <NavLink to="/components/paragraph" style={linkStyle}>Paragraph</NavLink>
        <NavLink to="/components/code" style={linkStyle}>Code</NavLink>
        <NavLink to="/components/list" style={linkStyle}>List</NavLink>
        <NavLink to="/components/card" style={linkStyle}>Card</NavLink>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>UI Components</h3>
        <NavLink to="/components/button" style={linkStyle}>Button</NavLink>
        <NavLink to="/components/header" style={linkStyle}>Header</NavLink>
        <NavLink to="/components/footer" style={linkStyle}>Footer</NavLink>
        <NavLink to="/components/navigation" style={linkStyle}>Navigation</NavLink>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Style Sets</h3>
        <NavLink to="/sets/clearline7" style={linkStyle}>Clearline 7</NavLink>
        <NavLink to="/sets/blog-posts" style={linkStyle}>Blog Posts</NavLink>
        <NavLink to="/sets/clerical-pro" style={linkStyle}>Clerical Pro</NavLink>
        <NavLink to="/sets/clerkroom" style={linkStyle}>ClerkRoom</NavLink>
        <NavLink to="/sets/federal" style={linkStyle}>Federal Flow</NavLink>
        <NavLink to="/sets/techdocs" style={linkStyle}>TechDocs</NavLink>
        <NavLink to="/sets/wiki" style={linkStyle}>Wiki Guidelines</NavLink>
      </div>
    </nav>
  );
}
