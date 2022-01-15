import { anthem } from './anthem';
import { CenteredSingleColumn  } from './CenteredSingleColumn';
import { Menu } from './Menu';
import { MouseEvent, useState } from 'react';
import { NameTag } from './NameTag';
import { SideBar } from './SideBar';
import { UnicodeLogo } from './UnicodeLogo';

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
      <UnicodeLogo code={code} symbol={symbol} isPlaying={isPlaying} anthem={anthem.Bezerk} />
      <NameTag name={name} />
      <Menu sideBarHandler={sideBarHandler} pausePlay={pausePlay} isPlaying={isPlaying} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  );
}
