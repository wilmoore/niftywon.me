const { books } = require('./books')
const { translations } = require('./bible')

const TOKEN_TYPES = [
  ['BOOK', /\b/.source + `(${books().join('|')})` + /\b/.source],
  ['PASSAGE', /(\b([\d]+[\d:-]*)\b)/i],
  // ['TRANSLATION', /\b(AMP|NLT|NKJV|NIV)\b/i],
  ['TRANSLATION', /\b/.source + `(${translations().join('|')})` + /\b/.source],
]

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
