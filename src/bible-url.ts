import { tokenizer, parser } from './bible-reference-interpreter'
import * as books from './bible-reference-interpreter/books'
import * as translations from './bible-reference-interpreter/translations'

export const url = (ref: string) => {
  const tokens = tokenizer(ref)
  const { book, passage, translation } = parser(tokens)

  const tId = translations[translation]
  const bId = books[book]
  const pId = passage.replace(':', '.')
  const path = `${tId}/${bId}.${pId}.${translation}`

  return `//bible.com/bible/${path}`
}
