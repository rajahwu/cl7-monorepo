// src/components/Shell/Sidebar.tsx
import Link from 'next/link'

const NavItem = ({
  label,
  href,
  active = false,
}: {
  label: string
  href: string
  active?: boolean
}) => (
  <Link
    href={href}
    className={`
      flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
      ${
        active
          ? 'bg-primary/10 text-accent'
          : 'text-muted hover:text-text hover:bg-surface-highlight'
      }
    `}
  >
    {label}
  </Link>
)

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-surface border-r border-primary/20 flex flex-col fixed left-0 top-0">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-primary/20">
        <div className="w-6 h-6 bg-accent rounded-sm mr-3"></div>
        <span className="text-lg font-heading tracking-wide text-text">
          CLEARLINE<span className="text-accent">7</span>
        </span>
      </div>

      {/* Navigation Group 1: Creation */}
      <div className="p-4 space-y-1">
        <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2 rounded-button font-medium text-sm transition-all shadow-medium mb-6">
          <span>+</span> New Document
        </button>

        <div className="text-xs font-mono text-muted uppercase tracking-wider px-3 mb-2 mt-6">
          Workspace
        </div>
        <NavItem label="Dashboard" href="/" active />
        <NavItem label="Drafts" href="/drafts" />
        <NavItem label="Templates" href="/templates" />
      </div>

      {/* Navigation Group 2: System */}
      <div className="p-4 mt-auto border-t border-primary/20">
        <div className="text-xs font-mono text-muted uppercase tracking-wider px-3 mb-2">
          System
        </div>
        <NavItem label="Brand Kit" href="/brand" />
        <NavItem label="Settings" href="/settings" />
      </div>
    </aside>
  )
}
