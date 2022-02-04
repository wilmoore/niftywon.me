import { CenteredSingleColumn } from './CenteredSingleColumn'
import { code, symbol } from './id'
import { Menu } from './Menu'
import { MouseEvent, useState } from 'react'
import { SideBar } from './SideBar'
import { WonUnicoLogo } from './WonUnicoLogo'
import { Word } from './Word'

export const Main = () => {
  const hash = window.location.hash
  const action = hash.length ? hash.slice(1).toLowerCase() : ''
  const [isOpen, setIsOpen] = useState(action === 'contact')
  const [page, setPage] = useState(action)

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
