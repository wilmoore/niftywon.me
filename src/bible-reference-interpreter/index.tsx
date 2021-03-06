import * as books from './books'
import * as translations from './translations'

const TOKEN_TYPES = [
  ['BOOK', /\b/.source + `(${books.list()})` + /\b/.source],
  ['PASSAGE', /(\b([\d]+[\d:-]*)\b)/i],
  ['TRANSLATION', /\b/.source + `(${translations.list()})` + /\b/.source],
]

export const parser = (tokens: any) => {
  const book = (tokens.find((token: any) => token.type === 'BOOK' ))?.value || 'Genesis'
  const passage = (tokens.find((token: any) => token.type === 'PASSAGE' ))?.value || '1:1'
  const translation = (tokens.find((token: any) => token.type === 'TRANSLATION' ))?.value || 'NLT'

  return { book, passage, translation }
}

export const tokenizer = (source: string) => {
  let reference = source
  let tokens: {[key: string]: string}[] = []

  TOKEN_TYPES.forEach((tokenType, iteration) => {
    const [type, rule] = tokenType

    const matched = reference.match(rule)

    if (matched) {
      let value = matched[1]
      reference = reference.slice(value.length).trim()
      let token = { type, value }
      tokens.push(token)
    }
  })

  return tokens
}
