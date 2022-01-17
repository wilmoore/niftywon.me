import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const PlayIcon = styled(PlayCircleOutlineIcon)`
  display: none;
  color: #b3b3b3;
  z-index: 1;
  font-size: 7em;
  position: absolute;
  left: 46%;
  top: 35%;
  opacity: 26%;
`;

interface UnicodeLogoProps {
  code: string;
  symbol: string;
}

export const UnicodeLogo = ({ code, symbol }: UnicodeLogoProps) => {
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const href = `https://unicode-table.com/en/${code}/`;
  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  // const classNames = (isPlaying) ? 'spin' : '';
  const classNames = '';

  const audioPlay = (event: any) => {
    const audioPlayer = window.document.querySelector('#audio-player') as HTMLAudioElement;

    if (audioPlayer.paused) {
      audioPlayer.play();
      audioPlayer.muted = false;
    } else {
      audioPlayer.pause();
    }
  };

  useEffect(() => {
    const logo = window.document.querySelector('#unicode-logo');

    const onMouseOver = (event: any) => {
      setTimeout(() => setShowPlayIcon(!showPlayIcon), 300);
    }

    logo?.addEventListener('mouseover', onMouseOver);

    return () => {
      logo?.removeEventListener('mouseover', onMouseOver);
    };
  }, [showPlayIcon]);

  return (
    <>
      <audio id="audio-player" src="https://s3.amazonaws.com/beatstarsdata/b.user.data/k/kosmusic-158021/stream/2716147_custom.mp3" loop muted />
      <PlayIcon onClick={audioPlay} id="play-icon" style={{ display: showPlayIcon ? 'block' : 'none' }} />
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={classNames} src={logo.letter} alt={symbol} />
      </a>
    </>
  )
};

export default UnicodeLogo;
