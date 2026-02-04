import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem,
} from '@clearline7/components'

const markdownComponents = {
  h1: ({ children }: any) => <H1>{children}</H1>,
  h2: ({ children }: any) => <H2>{children}</H2>,
  h3: ({ children }: any) => <H3>{children}</H3>,
  p: ({ children }: any) => <Paragraph>{children}</Paragraph>,
  blockquote: ({ children }: any) => <Blockquote>{children}</Blockquote>,
  code: ({ inline, children }: any) => <Code inline={inline}>{children}</Code>,
  ul: ({ children }: any) => <List>{children}</List>,
  ol: ({ children }: any) => <List ordered>{children}</List>,
  li: ({ children }: any) => <ListItem>{children}</ListItem>,
}

export function UrlMarkdownPreview() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/sample.md')
      .then(res => res.text())
      .then(setContent)
  }, [])

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {content}
    </ReactMarkdown>
  )
}
