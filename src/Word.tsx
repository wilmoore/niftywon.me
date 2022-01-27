import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { Link } from './Link'
import { href, verse } from './verse'

const Text = styled(Chip)`
  color: #b3b3b3;
  margin-top: 3vh;
  cursor: pointer;
`

export const Word = () => {
  return (
    <Link href={href}>
      <Text label={verse} />
      </Link>
  )
}

export default Word
