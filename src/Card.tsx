import { MouseEvent, useState } from 'react';

import { CenteredSingleColumn  } from './CenteredSingleColumn';
import { Menu } from './Menu';
import { NameTag } from './NameTag';
import { SideBar } from './SideBar';
import { UnicodeLogo } from './UnicodeLogo';

const anthem = {
  Bezerk: '//content.beatstars.com/users/prod/224460/a4t704kbe.mp3',
  TheseDays: '//cloudup.com/cAtzezeD_tk+',
  EightiesFeel: '//main.v2.beatstars.com/stream?id=5870232&return=audio&timestamp=1640578239',
  Toxic: 'https://main.v2.beatstars.com/stream?id=9755794&return=audio&timestamp=1642231148',
};

export default function Card() {
  const code = '₩';
  const name = 'Wil (₩) Moore III';

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
      <UnicodeLogo code={code} isPlaying={isPlaying} anthem={anthem.Toxic} />
      <NameTag name={name} />
      <Menu sideBarHandler={sideBarHandler} pausePlay={pausePlay} isPlaying={isPlaying} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  );
}
