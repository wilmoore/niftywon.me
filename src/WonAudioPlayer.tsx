import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import styled from '@emotion/styled'
import { anthem } from './anthem'
import { popz } from './popz'

const PauseIcon = styled(PauseCircleOutlineIcon)`
  display: block;
  z-index: 1;
  color: #b3b3b3;
  font-size: 7em;
  position: absolute;
  left: 121px;
  top: 121px;
  opacity: 13%;
`

const PlayIcon = styled(PlayCircleOutlineIcon)`
  display: block;
  z-index: 1;
  color: #b3b3b3;
  font-size: 7em;
  position: absolute;
  left: 121px;
  top: 121px;
  opacity: 13%;
`

interface Props {
  isPlaying: boolean
  onPlayPause: any
}

export const WonAudioPlayer = ({ isPlaying, onPlayPause }: Props) => {
  const pop = popz('#wonlogo-audio')

  return (
    <>
      <audio muted loop id="wonlogo-audio" onPlay={onPlayPause} onPause={onPlayPause} src={anthem.CHANEL} />
      {(isPlaying) ? <PauseIcon onClick={pop} /> : <PlayIcon onClick={pop} />}
    </>
  )
}

export default WonAudioPlayer
