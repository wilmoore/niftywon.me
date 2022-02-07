import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { href, ref } from './bible'
import { Link } from './Link'

const Text = styled(Chip)`
  color: #CAB6A2;
  margin-top: 3vh;
  cursor: pointer;
`

export const Word = () => {
  return (
    <Link href={href}>
      <Text label={ref} />
    </Link>
  )
}

export default Word
