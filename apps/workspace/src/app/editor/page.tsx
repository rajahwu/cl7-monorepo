// src/app/editor/page.tsx
'use client'

import { useState } from 'react'
// 1. Import your actual definitions
import { BoxKit, SetDefinition, TechLaw } from '@clearline7/set-definitions'

// Map dropdown strings to actual objects
const THEMES: Record<string, SetDefinition> = {
  BoxKit: BoxKit,
  TechLaw: TechLaw,
}

export default function EditorPage() {
  const [docState, setDocState] = useState({
    title: 'Deployment Protocol v7',
    category: 'Memo',
    theme: 'TechLaw',
    body: `1. OBJECTIVE
The primary objective of this protocol is to establish a standardized formatting baseline for all mission-critical documentation.

2. EXECUTION
Effective immediately, all personnel are required to utilize the Clearline7 workspace for document generation. Manual formatting is strictly prohibited.

3. OUTCOME
- Increased readability
- Reduced cognitive load
- Absolute structural consistency`,
  })

  // 2. Get the active SetDefinition based on state
  const activeTheme = THEMES[docState.theme] || TechLaw

  // 3. Convert the SetDefinition to a generic CSS style object
  // (We use a helper here to map the SetDefinition values to CSS vars)
  const previewStyles = {
    '--preview-font-heading': activeTheme.typography.headingFont,
    '--preview-font-body': activeTheme.typography.bodyFont,
    '--preview-color-primary': activeTheme.colors.primary,
    '--preview-color-text': activeTheme.colors.text,
    '--preview-color-accent': activeTheme.colors.accent,
    '--preview-h1-size': activeTheme.typography.h1Size,
    '--preview-line-height': activeTheme.typography.lineHeightNormal,
  } as React.CSSProperties

  return (
    <div className="h-[calc(100vh-4rem)] flex gap-6">
      {/* --- LEFT PANEL (Controls) - Stays Dark/Engineered --- */}
      <div className="w-1/2 flex flex-col gap-6">
        <div className="bg-surface p-6 rounded-card border border-primary/20 shadow-medium">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">
                Theme System
              </label>
              <select
                className="w-full bg-bg border border-primary/30 rounded-input p-2 text-sm text-text focus:border-accent outline-none"
                value={docState.theme}
                onChange={(e) => setDocState({ ...docState, theme: e.target.value })}
              >
                {/* Dynamically list available themes */}
                {Object.keys(THEMES).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-mono text-muted uppercase tracking-wider">Title</label>
            <input
              type="text"
              className="w-full bg-bg border border-primary/30 rounded-input p-2 text-lg font-heading text-text focus:border-accent outline-none"
              value={docState.title}
              onChange={(e) => setDocState({ ...docState, title: e.target.value })}
            />
          </div>
        </div>

        <div className="flex-1 bg-surface rounded-card border border-primary/20 shadow-medium p-4 flex flex-col">
          <label className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
            Content Input
          </label>
          <textarea
            className="flex-1 w-full bg-bg border border-primary/30 rounded-input p-4 text-text font-mono text-sm leading-relaxed resize-none focus:border-accent outline-none"
            value={docState.body}
            onChange={(e) => setDocState({ ...docState, body: e.target.value })}
            spellCheck={false}
          />
        </div>
      </div>

      {/* --- RIGHT PANEL (The Live Preview) --- */}
      <div className="w-1/2 bg-[#F5F5F5] rounded-card border border-primary/20 shadow-high overflow-hidden flex flex-col">
        {/* Preview Chrome */}
        <div className="h-10 bg-[#E0E0E0] border-b border-[#D0D0D0] flex items-center px-4 justify-between">
          <span className="text-xs font-sans text-gray-500 font-medium">
            LIVE RENDER: {docState.theme.toUpperCase()}
          </span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* The Paper Container */}
        <div className="flex-1 overflow-y-auto p-12 relative">
          {/* Here is the magic: We apply the 'previewStyles' to this container.
             Inside, we use `var(--preview-...)` instead of Tailwind classes.
          */}
          <div
            className="max-w-[210mm] mx-auto bg-white shadow-sm min-h-[297mm] p-12 transition-all duration-300 ease-in-out"
            style={previewStyles}
          >
            {/* Document Title */}
            <h1
              style={{
                fontFamily: 'var(--preview-font-heading)',
                fontSize: 'var(--preview-h1-size)',
                color: 'var(--preview-color-primary)',
                borderBottom: '4px solid var(--preview-color-primary)',
              }}
              className="mb-6 pb-4"
            >
              {docState.title}
            </h1>

            {/* Meta Data */}
            <div
              style={{
                fontFamily: 'var(--preview-font-body)',
                color: 'var(--preview-color-accent)',
              }}
              className="flex justify-between text-xs font-bold tracking-widest mb-12 uppercase"
            >
              <span>{docState.category}</span>
              <span>CLASSIFIED: INTERNAL</span>
            </div>

            {/* Body Content */}
            <div
              style={{
                fontFamily: 'var(--preview-font-body)',
                color: 'var(--preview-color-text)',
                lineHeight: 'var(--preview-line-height)',
              }}
              className="whitespace-pre-wrap text-base"
            >
              {docState.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
