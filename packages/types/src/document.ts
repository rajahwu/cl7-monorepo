// packages/types/src/document.ts

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface ContentHeading {
  type: 'heading'
  level: HeadingLevel
  text: string
}

export interface ContentParagraph {
  type: 'paragraph'
  text: string
}

export interface ContentList {
  type: 'list'
  ordered: boolean
  items: string[]
}

export interface ContentCode {
  type: 'code'
  language?: string
  code: string
}

// The Union Type (The "Block")
export type ContentBlock = ContentHeading | ContentParagraph | ContentList | ContentCode

// The Document Root
export interface ClearlineDocument {
  title: string
  content: ContentBlock[]
}
