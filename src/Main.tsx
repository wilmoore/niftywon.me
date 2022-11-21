import { CenteredSingleColumn } from './layout/CenteredSingleColumn'
import { code, symbol } from './id'
import { IntroText } from './IntroText'
import { Menu } from './Menu'
import { MouseEvent, useState } from 'react'
import { SideBar } from './SideBar'
import { WonUnicoLogo } from './WonUnicoLogo'
import { Word } from './Word'

const hashToPage: Record<string, string> = {
  vcard: 'vcard',
  me: 'vcard',
};

const openTo = () => {
  const { hash } = window.location

  if (hash.length) {
    const hashValue: string = hash.slice(1).toLowerCase()

    return (hashValue in hashToPage)
      ? hashToPage[hashValue]
      : ''
  }

  return ''
}

export const Main = () => {
  // const [isOpen, setIsOpen] = useState(Boolean(openTo().length))
  const [isOpen, setIsOpen] = useState(true)
  const [page, setPage] = useState(openTo() || hashToPage.vcard)

  const sideBarHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { sidebarPage } = event?.currentTarget?.dataset
    setPage(sidebarPage || '')
    setIsOpen(Boolean(sidebarPage?.length))
  }

  return (
    <CenteredSingleColumn>
      <IntroText />
      <WonUnicoLogo code={code} symbol={symbol} />
      <Word />
      <Menu sideBarHandler={sideBarHandler} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  )
}

export default Main