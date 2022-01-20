interface Props {
  children: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: Props) => {
  return (
    <a style={{ color: '#b33bb3', textDecoration: 'none' }} href={href} target='_blank' rel='noopener noreferrer nofollow'>
      {children}
    </a>
  )
}

export default Link
