import { useEffect, useState } from 'react';

interface UnicodeLogoProps {
  code: string;
  isPlaying: boolean;
  anthem: string;
}

export const UnicodeLogo = ({ code, isPlaying, anthem }: UnicodeLogoProps) => {
  const [audio] = useState(new Audio(anthem));
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
      const promiseToPlay = audio.play();

      if (promiseToPlay !== undefined) {
        promiseToPlay.then(() => {
          audio.muted = false;
        }).catch((error) => {
          console.error(`Unable to play media: ${error.message}`);
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
