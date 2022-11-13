export const header = () => `
BEGIN:VCARD
VERSION:4.0
KIND:individual
`;

export const name = ({ fname, mname, lname, nameSuffix, nameTitle }: { fname: string; mname: string; lname: string; nameSuffix: string, nameTitle: string }) => `
N;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:${lname};${fname};${mname};${nameTitle};${nameSuffix}
`;

export const fullName = ({ displayName }: { displayName: string }) => `
FN;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:${displayName}
`;

export const company = ({ company }: { company: string }) => `
ORG:${company}
`;

export const title = ({ jobTitle }: { jobTitle: string }) => `
TITLE:${jobTitle}
`;

export const role = ({ bio }: { bio: string }) => `
ROLE:${bio}
`;

export const note = ({ note }: { note: string }) => `
NOTE;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:${note.replace(/\n/g, '\\n')}
`;

// TODO: base64 encode photo data
export const photo = ({ largeAvatar }: { largeAvatar: string }) => `
PHOTO;ENCODING=b;TYPE=JPEG:${largeAvatar}
`;

export const profiles = ({ profiles }: { profiles: Array<any> }) => {
  return profiles.map((profile) => `X-SOCIALPROFILE;type=${profile.type};x-user=${profile.user}:${profile.uri}`).join('\n');
};

export const phones = ({ phones }: { phones: Array<any> }) => {
  return phones.map((phone) => `TEL;VALUE=uri;PREF=1;TYPE="cell,voice,text";${phone.label}:${phone.uri}`).join('\n');
};

export const address = ({ street, street2, city, state, zip, country }: { street: string; street2: string; city: string; state: string; zip: string; country: string }) => `
ADR;TYPE=work;Main="${street}, ${street2}\n${city}, ${state} ${zip}\n${country}":;;${street}, ${street2};${city}; ${state} ${zip};${country}
`;

export const email = ({ email }: { email: string }) => `
EMAIL:${email}
`;

export const homepage = ({ homepage }: { homepage: string }) => `
URL;TYPE=HOME;website:${homepage}
`;

export const links = ({ links }: { links: Array<any> }) => {
  return links.map((link) => `URL;TYPE=LINK;${link.label}:${link.uri}`).join('\n');
};

export const footer = () => `
REV:${new Date().toISOString().replace(/[-:.]/g, '')}
END:VCARD
`;