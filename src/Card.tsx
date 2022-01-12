import { MouseEvent, useState } from 'react';

import { CenteredSingleColumn  } from './CenteredSingleColumn';
import { Menu } from './Menu';
import { NameTag } from './NameTag';
import { SideBar } from './SideBar';
import { UnicodeLogo } from './UnicodeLogo';

export default function Card() {
  const code = '₩';
  const name = 'Wil (₩) Moore III';
  // const song = 'https://main.v2.beatstars.com/stream?id=5870232&return=audio&timestamp=1640578239';
  // const song = 'https://cloudup.com/cAtzezeD_tk+'; // these days
  // const song = 'https://main.v2.beatstars.com/stream?id=10112959&return=audio&timestamp=1641508736';
  const song = 'https://main.v2.beatstars.com/stream?id=510793&return=audio&timestamp=1641803281'

  const [ isOpen, setIsOpen ] = useState(false);
  const [ page, setPage ] = useState('');
  const [ play, setPlay ] = useState(false);

  const sideBarHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { sidebarPage } = event?.currentTarget?.dataset;
    setPage(sidebarPage || '');
    setIsOpen(Boolean(sidebarPage?.length));
  };

  const pausePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPlay(!play);
  };

  return (
    <CenteredSingleColumn>
      <UnicodeLogo code={code} play={play} song={song} />
      <NameTag name={name} />
      <Menu sideBarHandler={sideBarHandler} pausePlay={pausePlay} isPlaying={!play} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  );
}
