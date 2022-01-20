interface Props {
  id: string
  onPlayPause: any
  sources: string
}

export const AudioElement = ({ id, onPlayPause, sources }: Props) => {
  return (
    <>
      <audio muted loop id={id} onPlay={onPlayPause} onPause={onPlayPause} src={sources} />
    </>
  )
}

export default AudioElement
