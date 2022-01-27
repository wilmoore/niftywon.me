import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { href, verse } from './verse'
import { Link } from './Link'

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
