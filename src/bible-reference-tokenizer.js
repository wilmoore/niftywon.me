const TOKEN_TYPES = [
  ['BOOK', /\b(song of solomon|song of songs|psalms|proverbs)\b/i],
  ['PASSAGE', /(\b([\d]+[\d:-]*)\b)/i],
  ['TRANSLATION', /\b(NLT|NKJV|NIV)\b/i],
]

export const tokenizer = (source) => {
  let reference = source

  TOKEN_TYPES.forEach((tokenType, iteration) => {
    const [type, rule] = tokenType

    const matched = reference.match(rule)

    if (matched) {
      let value = matched[1]
      reference = reference.slice(value.length).trim()
      let token = { type, value }
      console.log({ token, reference})
    }
  })
}
