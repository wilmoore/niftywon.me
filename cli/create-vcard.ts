// import contact from '../public/me.json';
import contact from '../src/me.json';
import {
  header,
  footer,
  name,
  fullName,
  company,
  title,
  role,
  note,
  photo,
  profiles,
  phones,
  address,
  email,
  homepage,
  links
} from './templates';

const vcard = [
  header(),
  name(contact),
  fullName(contact),
  company(contact),
  title(contact),
  role(contact),
  note(contact),
  photo(contact),
  profiles(contact),
  phones(contact),
  address(contact),
  email(contact),
  homepage(contact),
  links(contact),
  footer(),
]
.map(string => string.trim())
.join('\n')

console.log(vcard);