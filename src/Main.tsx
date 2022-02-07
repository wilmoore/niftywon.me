import { CenteredSingleColumn } from './layout/CenteredSingleColumn'
import { code, symbol } from './id'
import { Menu } from './Menu'
import { MouseEvent, useState } from 'react'
import { SideBar } from './SideBar'
import { WonUnicoLogo } from './WonUnicoLogo'
import { Word } from './Word'

const openTo = () => {
  const { hash } = window.location

  if (hash.length) {
    const hashValue = hash.slice(1).toLowerCase()

    return (hashValue === 'vcard')
      ? hashValue
      : ''
  }

  return ''
}

export const Main = () => {
  const [isOpen, setIsOpen] = useState(openTo().length)
  const [page, setPage] = useState(openTo())

  const sideBarHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { sidebarPage } = event?.currentTarget?.dataset
    setPage(sidebarPage || '')
    setIsOpen(Boolean(sidebarPage?.length))
  }

  return (
    <CenteredSingleColumn>
      <WonUnicoLogo code={code} symbol={symbol} />
      <Word />
      <Menu sideBarHandler={sideBarHandler} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  )
}

export default Main
