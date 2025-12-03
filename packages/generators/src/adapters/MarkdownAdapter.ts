import { GeneratorAdapter } from './GeneratorAdapter'
import { SetDefinition } from '@clearline7/set-definitions'

interface DocContent {
  type: 'paragraph' | 'heading' | 'code' | 'list' | 'card'
  text?: string
  children?: DocContent[]
  level?: number
}

export class MarkdownAdapter implements GeneratorAdapter {
  async generate(content: DocContent[], definition: SetDefinition): Promise<string> {
    let md = ''

    // Frontmatter could go here
    md += `---\n`
    md += `theme: ${definition.colors.primary}\n`
    md += `---\n\n`

    content.forEach((block) => {
      switch (block.type) {
        case 'heading':
          md += `${'#'.repeat(block.level || 1)} ${block.text}\n\n`
          break
        case 'paragraph':
          md += `${block.text}\n\n`
          break
        case 'code':
          md += `\
${block.text}\n\
`
          break
        case 'list':
          // simplified list handling
          block.children?.forEach((item) => {
            md += `- ${item.text}\n`
          })
          md += '\n'
          break
      }
    })

    return md
  }
}
