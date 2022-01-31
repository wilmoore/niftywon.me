export { ref } from './id'

import { tokenizer } from './bible-reference-tokenizer'
import { bookup } from './books'
import { lookup } from './translations'
import { ref } from './id'

const tokens = tokenizer(ref)
const book = (tokens.find(( token ) => { return token.type === 'BOOK' }))?.value || 'Genesis'
const passage = (tokens.find(( token ) => { return token.type === 'PASSAGE' }))?.value || '1:1'
const translation = (tokens.find(( token ) => { return token.type === 'TRANSLATION' }))?.value || 'NLT'

export const href = `//bible.com/bible/${lookup(translation)}/${bookup(book)}.${passage.replace(':', '.')}.${translation}`
