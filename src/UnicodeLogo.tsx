import styled from '@emotion/styled';
import { useState } from 'react';
import { WonAudioPlayer } from './WonAudioPlayer';

const UnicodeLogoContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

interface UnicodeLogoProps {
  code: string;
  symbol: string;
}

export const UnicodeLogo = ({ code, symbol }: UnicodeLogoProps) => {
  const [imageClassNames, setImageClassNames] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const href = `https://unicode-table.com/en/${code}/`;
  const logo = `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`;

  const onPlayPause = (event: any) => {
    setImageClassNames((event.type === 'play') ? 'spin' : '');
    setIsPlaying(event.type === 'play');
  };

  return (
    <UnicodeLogoContainer>
      <WonAudioPlayer isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={imageClassNames} src={logo} alt={symbol} />
      </a>
    </UnicodeLogoContainer>
  )
};

export default UnicodeLogo;
