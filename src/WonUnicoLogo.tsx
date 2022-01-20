import styled from '@emotion/styled'
import { Link } from './Link'
import { useState } from 'react'
import { WonAudioPlayer } from './WonAudioPlayer'

const ViewBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`

interface Props {
  code: string
  symbol: string
}

const NOSPIN = ''

export const WonUnicoLogo = ({ code, symbol }: Props) => {
  const [imageClassNames, setImageClassNames] = useState(NOSPIN)
  const [isPlaying, setIsPlaying] = useState(false)

  const href = `https://unicode-table.com/en/${code}/`
  const logo = `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`

  const onPlayPause = (event: any) => {
    const isPlaying = (event.type === 'play')
    setIsPlaying(isPlaying)
    setImageClassNames(isPlaying ? 'spin' : NOSPIN)
  }

  return (
    <ViewBox>
      <WonAudioPlayer isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Link href={href}>
        <img id="unicode-logo" className={imageClassNames} src={logo} alt={symbol} />
      </Link>
    </ViewBox>
  )
}

export default WonUnicoLogo
