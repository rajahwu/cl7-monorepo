import { useState, useRef } from 'react'
import { SetDefinitionProvider } from '@clearline7/theme'
import {
  Clearline7,
  BlogPosts,
  ClericalOfficePro,
  ClerkRoomStandard,
  FederalFlow,
  TechDocs,
  WikiGuidelines,
  SetDefinition
} from '@clearline7/set-definitions'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './style.css'
// import HtmlToDocx from '@turbodocx/html-to-docx'
// import { saveAs } from 'file-saver'
// import html2pdf from 'html2pdf.js'

const STYLE_SETS: Record<string, SetDefinition> = {
  'Clearline 7': Clearline7,
  'Blog Posts': BlogPosts,
  'Clerical Office Pro': ClericalOfficePro,
  'ClerkRoom Standard': ClerkRoomStandard,
  'Federal Flow': FederalFlow,
  'TechDocs': TechDocs,
  'Wiki Guidelines': WikiGuidelines,
}

const App = () => {
  const [activeSet, setActiveSet] = useState('Clearline 7')
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h1>Welcome to the ClearLine7 Preview</h1>
      <p>This is a basic preview of the editor. You can change the style set on the left to see how it affects the content.</p>
      <ul>
        <li>This is a list item.</li>
        <li>And another one.</li>
      </ul>
      <blockquote>
        This is a blockquote.
      </blockquote>
      <pre><code>This is a code block.</code></pre>
    `,
  })
  const contentRef = useRef<HTMLDivElement>(null)

  // const exportToWord = async () => {
  //   if (editor) {
  //     const html = editor.getHTML()
  //     const docx = await HtmlToDocx(html)
  //     saveAs(docx, 'document.docx')
  //   }
  // }

  // const exportToPdf = () => {
  //   if (contentRef.current) {
  //     const element = contentRef.current
  //     html2pdf().from(element).save('document.pdf')
  //   }
  // }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{
        width: '250px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
      }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Preview Controls</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Style Set
          </label>
          <select
            value={activeSet}
            onChange={(e) => setActiveSet(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            {Object.keys(STYLE_SETS).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>

        {/* <button
          onClick={exportToWord}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Export to Word
        </button> */}

        {/* <button
          onClick={exportToPdf}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Export to PDF
        </button> */}

        <div style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
          <p>Select a style set to preview how your document will look with different styling.</p>
        </div>
      </aside>

      <main style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
        <SetDefinitionProvider setDefinition={STYLE_SETS[activeSet]}>
          <div ref={contentRef}>
            <EditorContent editor={editor} />
          </div>
        </SetDefinitionProvider>
      </main>
    </div>
  )
}

export default App
