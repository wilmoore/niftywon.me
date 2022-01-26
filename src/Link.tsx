import styled from '@emotion/styled'

const Ahref = styled.a`
  color: #35495D;
  text-decoration: none;
`

interface Props {
  children: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: Props) => {
  return (
    <Ahref href={href} target='_blank' rel='noopener noreferrer nofollow'>
      {children}
    </Ahref>
  )
}

export default Link
