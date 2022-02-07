const books = require('./books.json')
const translations = require('./translations.json')

const TOKEN_TYPES = [
  ['BOOK', /\b/.source + `(${Object.keys(books).join('|')})` + /\b/.source],
  ['PASSAGE', /(\b([\d]+[\d:-]*)\b)/i],
  ['TRANSLATION', /\b/.source + `(${Object.keys(translations).join('|')})` + /\b/.source],
]

export const parser = (tokens: any) => {
  const book = (tokens.find((token: any) => token.type === 'BOOK' ))?.value || 'Genesis'
  const passage = (tokens.find((token: any) => token.type === 'PASSAGE' ))?.value || '1:1'
  const translation = (tokens.find((token: any) => token.type === 'TRANSLATION' ))?.value || 'NLT'

  return { book, passage, translation }
}

export const tokenizer = (source: string) => {
  let reference = source
  let tokens: {[key: string]: string | RegExp}[] = []

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
