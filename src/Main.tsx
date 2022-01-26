import { CenteredSingleColumn } from './CenteredSingleColumn'
import { code, symbol } from './id'
import { Menu } from './Menu'
import { MouseEvent, useState } from 'react'
import { SideBar } from './SideBar'
import { verse } from './verse'
import { WonUnicoLogo } from './WonUnicoLogo'
import { Word } from './Word'

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState('')

  const sideBarHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { sidebarPage } = event?.currentTarget?.dataset
    setPage(sidebarPage || '')
    setIsOpen(Boolean(sidebarPage?.length))
  }

  return (
    <CenteredSingleColumn>
      <WonUnicoLogo code={code} symbol={symbol} />
      <Word verse={verse} />
      <Menu sideBarHandler={sideBarHandler} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} page={page} />
    </CenteredSingleColumn>
  )
}

export default Main
