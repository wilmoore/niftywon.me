import { anthem } from './anthem'
import { AudioControl } from './AudioControl'
import { AudioElement } from './AudioElement'
import { popz } from './popz'

interface Props {
  isPlaying: boolean
  onPlayPause: any
}

const ELEMENT_ID = 'audio-element-won'

export const WonAudioPlayer = ({ isPlaying, onPlayPause }: Props) => {
  const control = popz(`#${ELEMENT_ID}`)
  const sources = anthem.CHANEL

  return (
    <>
      <AudioElement id={ELEMENT_ID} onPlayPause={onPlayPause} sources={sources} />
      <AudioControl isPlaying={isPlaying} onClick={control} />
    </>
  )
}

export default WonAudioPlayer
