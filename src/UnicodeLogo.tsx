import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from '@emotion/styled';
import { anthem } from './anthem';
import { useState } from 'react';

const UnicodeLogoContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const PauseIcon = styled(PauseCircleOutlineIcon )`
  display: block;
  z-index: 1;
  color: #b3b3b3;
  font-size: 7em;
  position: absolute;
  left: 121px;
  top: 121px;
  opacity: 13%;
`;

const PlayIcon = styled(PlayCircleOutlineIcon)`
  display: block;
  z-index: 1;
  color: #b3b3b3;
  font-size: 7em;
  position: absolute;
  left: 121px;
  top: 121px;
  opacity: 13%;
`;

interface UnicodeLogoProps {
  code: string;
  symbol: string;
}

export const UnicodeLogo = ({ code, symbol }: UnicodeLogoProps) => {
  const [imageClassNames, setImageClassNames] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const href = `https://unicode-table.com/en/${code}/`;
  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  const onPlayPause = (event: any) => {
    setImageClassNames((event.type === 'play') ? 'spin' : '');
    setIsPlaying(event.type === 'play');
  };

  const audioControl = (event: any) => {
    const audio = window.document.querySelector('#audio-player') as HTMLAudioElement;

    if (audio.paused) {
      audio.play();
      audio.muted = false;
    } else {
      audio.pause();
    }
  };

  return (
    <UnicodeLogoContainer>
      <audio id="audio-player" src={anthem.Bezerk} onPlay={onPlayPause} onPause={onPlayPause} loop muted />
      { (isPlaying)
          ? <PauseIcon onClick={audioControl} />
          : <PlayIcon onClick={audioControl} />
      }
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={imageClassNames} src={logo.letter} alt={symbol} />
      </a>
    </UnicodeLogoContainer>
  )
};

export default UnicodeLogo;
