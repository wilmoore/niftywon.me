import { anthem } from './anthem';
import { CenteredSingleColumn  } from './CenteredSingleColumn';
import { code, symbol, name } from './id';
import { Menu } from './Menu';
import { MouseEvent, useState } from 'react';
import { NameTag } from './NameTag';
import { SideBar } from './SideBar';
import { UnicodeLogo } from './UnicodeLogo';

export const Card = () => {
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

export default Card;
