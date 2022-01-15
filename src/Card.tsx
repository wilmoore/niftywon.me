import { MouseEvent, useState } from 'react';

import { CenteredSingleColumn  } from './CenteredSingleColumn';
import { Menu } from './Menu';
import { NameTag } from './NameTag';
import { SideBar } from './SideBar';
import { UnicodeLogo } from './UnicodeLogo';

const anthem = {
  Bezerk: '//content.beatstars.com/users/prod/224460/a4t704kbe.mp3',
  EightiesFeel: '//main.v2.beatstars.com/stream?id=5870232&return=audio&timestamp=1640578239',
  Gunna: 'https://s3.amazonaws.com/beatstarsdata/b.user.data/k/kosmusic-158021/stream/2716147_custom.mp3',
  TheseDays: '//cloudup.com/cAtzezeD_tk+',
  Toxic: 'https://main.v2.beatstars.com/stream?id=9755794&return=audio&timestamp=1642231148',
};

export default function Card() {
  const code = '20A9';
  const escape = parseInt(code, 16);
  const symbol = String.fromCodePoint(escape);
  const name = `Wil (${symbol}) Moore III`;

  const [ isOpen, setIsOpen ] = useState(false);
  const [ page, setPage ] = useState('');
  const [ isPlaying, setIsPlaying ] = useState(false);

  const sideBarHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { sidebarPage } = event?.currentTarget?.dataset;
    setPage(sidebarPage || '');
    setIsOpen(Boolean(sidebarPage?.length));
  };

  const pausePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <CenteredSingleColumn>
      <UnicodeLogo code={code} symbol={symbol} isPlaying={isPlaying} anthem={anthem.Gunna} />
      <NameTag name={name} />
      <Menu sideBarHandler={sideBarHandler} pausePlay={pausePlay} isPlaying={isPlaying} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  );
}
