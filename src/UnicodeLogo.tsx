import { useEffect, useState } from 'react';

interface UnicodeLogoProps {
  code: string;
  symbol: string;
  isPlaying: boolean;
  anthem: string;
}

export const UnicodeLogo = ({ code, symbol, isPlaying, anthem }: UnicodeLogoProps) => {
  const [audio] = useState(new Audio(anthem));
  audio.loop = true;
  audio.autoplay = false;
  audio.muted = true;

  const href = `https://unicode-table.com/en/${code}/`;
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
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={classNames} src={logo.letter} alt={symbol} />
      </a>
    </>
  )
};

export default UnicodeLogo;
