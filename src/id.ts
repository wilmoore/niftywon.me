import contact from './me.json';

export const address = `${contact.street}, ${contact.street2}, ${contact.city} ${contact.state} ${contact.zip}`
export const bio = contact.bio
export const code = contact.id
export const company = contact.company
export const email = contact.email
export const escape = parseInt(code, 16)
export const id = String.fromCodePoint(escape)
export const logo = contact.avatar
export const name = contact.displayName
export const phone = contact.phones[0].uri
export const photo = contact.largeAvatar
export const role = contact.jobTitle
export const symbol = String.fromCodePoint(escape)
export const website = contact.homepage

export const ref = [
  '1 Corinthians 13',
  '1 Peter 5:2-4 NLT',
  'Psalms 21 KJV',
  '1 CHRONICLES 4 KJV',
  '1 THESSALONIANS 4 KJV',
  '2 Corinthians 11:3 KJV',
  'Ecclesiastes 5:3 KJV',
  'John 5:14 NLT',
  'Ephesians 1:18-23',
  'Matthew 28:19-20',
  'Mark 10:18 ESV',
  'Matthew 17:27',
  'Matthew 22:17-18',
  'Luke 14:28-30',
  'John 14:6',
  'Isaiah 2:4',
  '1 Kings 20:18',
  'Psalms 120:7',
  'Jeremiah 4:21 NLT',
  'Deuteronomy 23:9 NLT',
  'Job 5:20 NLT',
  'Ecclesiastes 9:18 NLT',
  'James 4:1 NLT',
  'Psalms 46:9 NLT',
  'Psalms 55:21 NLT',
  'Isaiah 8:10 NLT',
  'Proverbs 21:19',
  'Proverbs 27:15-16',
  'Proverbs 25:24',
  'Proverbs 14:1',
  'Proverbs 11:22',
  'Deuteronomy 32:4 NLT',
]