import { anthem } from './anthem'
import { PlayPauseIcon } from './PlayPauseIcon'
import { popz } from './popz'

interface Props {
  isPlaying: boolean
  onPlayPause: any
}

export const WonAudioPlayer = ({ isPlaying, onPlayPause }: Props) => {
  const pop = popz('#wonlogo-audio')

  return (
    <>
      <audio muted loop id="wonlogo-audio" onPlay={onPlayPause} onPause={onPlayPause} src={anthem.CHANEL} />
      <PlayPauseIcon isPlaying={isPlaying} onClick={pop} />
    </>
  )
}

export default WonAudioPlayer
