import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { url } from './bible-url'
import { ref } from './id'
import { Link } from './Link'

const Text = styled(Chip)`
  color: #CAB6A2;
  margin-top: 3vh;
  cursor: pointer;
`

export const Word = () => {
  return (
    <Link href={url(ref)}>
      <Text label={ref} />
    </Link>
  )
}

export default Word
