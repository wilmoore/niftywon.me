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
  const id = Math.floor(Math.random() * (ref.length - 0) + 0)

  return (
    <Link href={url(ref[id])}>
      <Text label={ref[id]} />
    </Link>
  )
}

export default Word
