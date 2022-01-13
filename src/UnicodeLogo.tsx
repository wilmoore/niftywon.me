import { useEffect, useState } from 'react';

export const UnicodeLogo = ({ code, isPlaying, song }: { code: string; isPlaying: boolean; song: string }) => {
  const [audio] = useState(new Audio(song));
  audio.loop = true;
  audio.autoplay = false;
  audio.muted = true;

  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  const classNames = (isPlaying) ? 'spin' : '';

  useEffect(() => {
    if (isPlaying) {
      const promise = audio.play();

      if (promise !== undefined) {
        promise.then(function() {
          console.log('playing')
          audio.muted = false;
        }).catch(function(error) {
          console.error(error)
        });
      }
    } else {
      audio.pause();
    }
  }, [audio, isPlaying]);

  return (
    <>
      <img id="unicode-logo" className={classNames} src={logo.letter} alt={code} />
    </>
  )
};

export default UnicodeLogo;
