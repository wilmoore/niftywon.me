import { tokenizer, parser } from './bible-reference-interpreter'
import * as books from './bible-reference-interpreter/books'
import * as translations from './bible-reference-interpreter/translations'

export const url = (ref: string) => {
  const tokens = tokenizer(ref)
  const { book, passage, translation } = parser(tokens)

  const tId = translations.find(translation)
  const bId = books.find(book)
  const pId = passage.replace(':', '.')

  return `//bible.com/bible/${tId}/${bId}.${pId}.${translation}`
}
