// src/app/editor/page.tsx
'use client'

import { useState } from 'react'

export default function EditorPage() {
  // 1. The State (The "JSON" behind the document)
  const [docState, setDocState] = useState({
    title: 'Untitled Protocol',
    category: 'Memo',
    theme: 'TechDocs',
    body: 'Initiating system launch sequence...',
  })

  return (
    <div className="h-[calc(100vh-4rem)] flex gap-6">
      {/* --- LEFT PANEL: The Controls (Input) --- */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Header / Meta */}
        <div className="bg-surface p-6 rounded-card border border-primary/20 shadow-medium">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">
                Document Type
              </label>
              <select
                className="w-full bg-bg border border-primary/30 rounded-input p-2 text-sm text-text focus:border-accent outline-none transition-colors"
                value={docState.category}
                onChange={(e) => setDocState({ ...docState, category: e.target.value })}
              >
                <option>Memo</option>
                <option>Technical Spec</option>
                <option>Flight Log</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-muted uppercase tracking-wider">
                Theme System
              </label>
              <select
                className="w-full bg-bg border border-primary/30 rounded-input p-2 text-sm text-text focus:border-accent outline-none transition-colors"
                value={docState.theme}
                onChange={(e) => setDocState({ ...docState, theme: e.target.value })}
              >
                <option>TechDocs</option>
                <option>FederalFlow</option>
                <option>BoxKit</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted uppercase tracking-wider">Title</label>
            <input
              type="text"
              className="w-full bg-bg border border-primary/30 rounded-input p-2 text-lg font-heading text-text focus:border-accent outline-none transition-colors"
              value={docState.title}
              onChange={(e) => setDocState({ ...docState, title: e.target.value })}
            />
          </div>
        </div>

        {/* The Body Editor */}
        <div className="flex-1 bg-surface rounded-card border border-primary/20 shadow-medium p-4 flex flex-col">
          <label className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
            Content Input
          </label>
          <textarea
            className="flex-1 w-full bg-bg border border-primary/30 rounded-input p-4 text-text font-mono text-sm leading-relaxed resize-none focus:border-accent outline-none transition-colors"
            value={docState.body}
            onChange={(e) => setDocState({ ...docState, body: e.target.value })}
            spellCheck={false}
          />
        </div>
      </div>

      {/* --- RIGHT PANEL: The Preview (Output) --- */}
      <div className="w-1/2 bg-[#F5F5F5] rounded-card border border-primary/20 shadow-high overflow-hidden flex flex-col">
        {/* Preview Header (Chrome) */}
        <div className="h-10 bg-[#E0E0E0] border-b border-[#D0D0D0] flex items-center px-4 justify-between">
          <span className="text-xs font-sans text-gray-500 font-medium">
            PREVIEW MODE: {docState.theme.toUpperCase()}
          </span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* The "Paper" */}
        <div className="flex-1 overflow-y-auto p-12">
          <div className="max-w-[210mm] mx-auto bg-white shadow-sm min-h-[297mm] p-12 text-black">
            {/* This is a Mock of what the Generator will actually output */}
            <h1 className="text-4xl font-bold mb-2 font-serif text-slate-900 border-b-4 border-slate-900 pb-4">
              {docState.title}
            </h1>
            <div className="flex justify-between text-sm font-mono text-slate-500 mb-12 mt-4">
              <span>TYPE: {docState.category.toUpperCase()}</span>
              <span>DATE: 2025-12-04</span>
            </div>

            <div className="prose max-w-none font-serif leading-relaxed whitespace-pre-wrap">
              {docState.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
