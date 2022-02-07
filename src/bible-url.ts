import { tokenizer, parser } from './bible-reference-interpreter'
import { bookup } from './bible-reference-interpreter/books'
import { lookup } from './bible-reference-interpreter/translations'

export const url = (ref: string) => {
  const tokens = tokenizer(ref)
  const { book, passage, translation } = parser(tokens)
  const path = `${lookup(translation)}/${bookup(book)}.${passage.replace(':', '.')}.${translation}`

  return `//bible.com/bible/${path}`
}
