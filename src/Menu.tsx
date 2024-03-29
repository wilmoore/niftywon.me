import CameraFrontIcon from '@mui/icons-material/CameraFront'
// import HelpIcon from '@mui/icons-material/Help'
import IconButton from '@mui/material/IconButton'
// import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import styled from '@emotion/styled'
import { Divider } from '@mui/material'
// import Tooltip from '@mui/material/Tooltip'
// import { Version } from './Version'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  display: inline;
  padding: 1em;
`

interface MenuProps {
  sideBarHandler?: any
}

export const Menu = ({ sideBarHandler }: MenuProps) => {
  return (
    <>
    <Divider />
    <List>
      <ListItem>
        <IconButton onClick={sideBarHandler} data-sidebar-page='vcard' aria-label='vcard' disabled={false}>
          <CameraFrontIcon sx={{ fontSize: '3.25rem' }} />
        </IconButton>
      </ListItem>
  {/*
      <ListItem>
        <IconButton onClick={sideBarHandler} data-sidebar-page='workhistory' aria-label='workhistory' disabled={false}>
          <WorkHistoryIcon />
        </IconButton>
      </ListItem>
  */}
  {/*
      <ListItem>
        <Tooltip title={'v' + Version} placement='right' arrow>
          <span>
            <IconButton aria-label='help' disabled>
              <HelpIcon />
            </IconButton>
          </span>
        </Tooltip>
      </ListItem>
*/}
    </List>
    </>
  )
}

export default Menu
