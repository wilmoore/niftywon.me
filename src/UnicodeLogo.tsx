import { useEffect, useState } from 'react';

export const UnicodeLogo = ({ code, play, song }: { code: string; play: boolean; song: string }) => {
  const [audio] = useState(new Audio(song));

  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  const classNames = (play) ? 'spin' : '';

  useEffect(() => {
    (play) ? (audio.loop = true) && audio.play() : audio.pause();
  }, [audio, play]);

  return (
    <>
      <img id="unicode-logo" className={classNames} src={logo.letter} alt={code} />
    </>
  )
};

export default UnicodeLogo;
