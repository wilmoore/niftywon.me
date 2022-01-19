import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import styled from '@emotion/styled'
import { anthem } from './anthem'

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
  const audioControl = (event: any) => {
    const audio = window.document.querySelector('#wonlogo-audio') as HTMLAudioElement

    if (audio.paused) {
      audio.play()
      audio.muted = false
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio id='wonlogo-audio' src={anthem.Bezerk} onPlay={onPlayPause} onPause={onPlayPause} loop muted />
      {(isPlaying)
        ? <PauseIcon onClick={audioControl} />
        : <PlayIcon onClick={audioControl} />}
    </>
  )
}

export default WonAudioPlayer
