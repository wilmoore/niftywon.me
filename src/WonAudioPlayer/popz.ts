export const popz = (selector: string) => {
  return (event: any) => {
    const audio = window.document.querySelector(selector) as HTMLAudioElement

    if (audio.paused) {
      audio.play()
      audio.muted = false
    } else {
      audio.pause()
    }
  }
}

export default popz
