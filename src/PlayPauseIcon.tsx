import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import styled from '@emotion/styled'

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
  onClick: any
}

export const PlayPauseIcon = ({ isPlaying, onClick }: Props) => {
  return (
    <>
      {(isPlaying) ? <PauseIcon onClick={onClick} /> : <PlayIcon onClick={onClick} />}
    </>
  )
}

export default PlayPauseIcon
