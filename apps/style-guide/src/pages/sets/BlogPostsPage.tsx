import { SetDefinitionProvider } from '@clearline7/theme'
import { BlogPosts } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function BlogPostsPage() {
  return (
    <div>
      <H1>Blog Posts</H1>
      <Paragraph>A readable style set optimized for blog content.</Paragraph>
      <SetDefinitionProvider setDefinition={BlogPosts}>
        <SpecimenSheet title="Blog Posts Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
