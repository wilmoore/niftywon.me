import styled from '@emotion/styled'
import { Drawer } from '@mui/material'
import { Vcard } from './SideBar/Vcard'

const Container = styled.div`
  width: 24em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: 1vw;
`

interface SideBarProps {
  isOpen: boolean
  setIsOpen: any
  page: string
};

const Page = ({ page }: { page: string }) => {
  switch (page) {
    case 'vcard':
      return <Vcard />
    default:
      return <div>Page Not Found</div>
  }
}

export const SideBar = ({ isOpen, setIsOpen, page }: SideBarProps) => {
  const side = 'left'

  return (
    <Drawer anchor={side} open={isOpen} onClose={(ev, reason) => setIsOpen(false)}>
      <Container>
        <Page page={page} />
      </Container>
    </Drawer>
  )
}

export default SideBar
