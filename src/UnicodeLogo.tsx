import styled from '@emotion/styled'
import { Link } from './Link'
import { useState } from 'react'
import { WonAudioPlayer } from './WonAudioPlayer'

const UnicodeLogoContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`

interface UnicodeLogoProps {
  code: string
  symbol: string
}

export const UnicodeLogo = ({ code, symbol }: UnicodeLogoProps) => {
  const [imageClassNames, setImageClassNames] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const href = `https://unicode-table.com/en/${code}/`
  const logo = `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`
  const isSpinning = (enable: boolean) => enable ? 'spin' : ''

  const onPlayPause = (event: any) => {
    const isPlaying = (event.type === 'play')
    setIsPlaying(isPlaying)
    setImageClassNames(isSpinning(isPlaying))
  }

  return (
    <UnicodeLogoContainer>
      <WonAudioPlayer isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Link href={href}>
        <img id='unicode-logo' className={imageClassNames} src={logo} alt={symbol} />
      </Link>
    </UnicodeLogoContainer>
  )
}

export default UnicodeLogo
