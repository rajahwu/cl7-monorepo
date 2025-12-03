import { SetDefinition } from '@clearline7/set-definitions'

export interface GeneratorAdapter {
  generate(content: unknown, definition: SetDefinition): Promise<Buffer | string | Blob>
}
