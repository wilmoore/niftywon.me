import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from '@emotion/styled';
import { anthem } from './anthem';
import { useEffect, useState } from 'react';

export const PauseIcon = styled(PauseCircleOutlineIcon )`
  display: none;
  color: #b3b3b3;
  z-index: 1;
  font-size: 7em;
  position: absolute;
  left: 46%;
  top: 35%;
  opacity: 26%;
`;

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
  const [classNames, setClassNames] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioIcon, setShowAudioIcon] = useState(false);
  const href = `https://unicode-table.com/en/${code}/`;
  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  const onPlay = (event: any) => {
    setClassNames('spin');
    setIsPlaying(true);
  };

  const onPause = (event: any) => {
    setClassNames('');
    setIsPlaying(false);
  };

  const playOrPause = (event: any) => {
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
      setTimeout(() => setShowAudioIcon(!showAudioIcon), 300);
    }

    logo?.addEventListener('mouseover', onMouseOver);

    return () => {
      logo?.removeEventListener('mouseover', onMouseOver);
    };
  }, [showAudioIcon]);

  return (
    <>
      <audio id="audio-player" src={anthem.Bezerk} onPlay={onPlay} onPause={onPause} loop muted />
      <PlayIcon onClick={playOrPause} id="play-icon" style={{ display: ( showAudioIcon && !isPlaying ) ? 'block' : 'none' }} />
      <PauseIcon onClick={playOrPause} id="pause-icon" style={{ display: ( showAudioIcon && isPlaying ) ? 'block' : 'none' }} />
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={classNames} src={logo.letter} alt={symbol} />
      </a>
    </>
  )
};

export default UnicodeLogo;
