import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { Link } from './Link'

const Text = styled(Chip)`
  color: #b3b3b3;
  margin-top: 3vh;
  cursor: pointer;
`

interface Props {
  verse: string;
}

export const Word = ({ verse }: Props) => (
  <Link href='https://www.bible.com/bible/116/PRO.3.1-26.NLT'>
    <Text label={verse} />
  </Link>
)

export default Word
