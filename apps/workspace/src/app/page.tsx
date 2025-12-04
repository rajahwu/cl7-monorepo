// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text flex items-center justify-center">
      <div className="max-w-md w-full bg-surface p-8 rounded-card border border-primary/30 shadow-high">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-accent rounded-sm"></div>
          <h1 className="text-h2 font-heading tracking-wide text-white">
            CLEARLINE<span className="text-accent">7</span>
          </h1>
        </div>

        {/* Status Display */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm font-mono text-muted">
            <span>SYSTEM STATUS</span>
            <span className="text-success">ONLINE</span>
          </div>

          <div className="h-px bg-primary/20" />

          <p className="text-body text-muted leading-relaxed">
            Workspace environment initialized.
            <br />
            Theme: <span className="text-accent">ElementSeven</span>
          </p>
          <Link href="/editor">
            <button className="w-full mt-4 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-button transition-colors">
              Initialize New Document
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
