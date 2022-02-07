const { books } = require('./books')
const { translations } = require('./translations')

const TOKEN_TYPES = [
  ['BOOK', /\b/.source + `(${books().join('|')})` + /\b/.source],
  ['PASSAGE', /(\b([\d]+[\d:-]*)\b)/i],
  ['TRANSLATION', /\b/.source + `(${translations().join('|')})` + /\b/.source],
]

export const parser = (tokens) => {
  const book = (tokens.find(( token ) => token.type === 'BOOK' ))?.value || 'Genesis'
  const passage = (tokens.find(( token ) => token.type === 'PASSAGE' ))?.value || '1:1'
  const translation = (tokens.find(( token ) => token.type === 'TRANSLATION' ))?.value || 'NLT'

  return { book, passage, translation }
}

export const tokenizer = (source) => {
  let reference = source
  let tokens = []

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
