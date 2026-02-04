import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import markdown from '../content/test.md?raw'

import {
  H1, H2, H3,
  Paragraph,
  Blockquote,
  Code,
  List,
  ListItem,
} from '@clearline7/components'

export function MarkdownPreview() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({node, ...props}) => <H1 {...props} />,
        h2: ({node, ...props}) => <H2 {...props} />,
        h3: ({node, ...props}) => <H3 {...props} />,
        p: ({node, ...props}) => <Paragraph {...props} />,
        blockquote: ({node, ...props}) => <Blockquote {...props} />,
        code({inline, children, ...props}: any) {
          return <Code inline={inline} {...props}>{children}</Code>
        },
        ul: ({node, ...props}) => <List {...props} />,
        ol: ({node, ...props}) => <List ordered {...props} />,
        li: ({node, ...props}) => <ListItem {...props} />,
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
