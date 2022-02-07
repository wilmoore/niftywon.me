import { tokenizer, parser } from './bible-reference-tokenizer'
import { bookup } from './bible-reference-tokenizer/books'
import { lookup } from './bible-reference-tokenizer/translations'

export const url = (ref: string) => {
  const tokens = tokenizer(ref)
  const { book, passage, translation } = parser(tokens)

  return `//bible.com/bible/${lookup(translation)}/${bookup(book)}.${passage.replace(':', '.')}.${translation}`
}